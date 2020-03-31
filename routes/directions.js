require('dotenv').config();

const createError = require('http-errors');
const express = require('express');
const axios = require("axios");
const CircularJSON = require('circular-json');
const api = require("../data/api");
// const result = require("./result.json");

const router = express.Router();

/* POST directions listing. */
router.post('/', function (req, res, next) {
    // Only show directions with filled in location
    if (req.body.location == null || req.body.location.length === 0) {
        next(createError(404))
    } else {
        api.getDirections(req.body.location)
            .then(result => {
                // Map data into a usable form
                let data = result.data.route;
                if(result.data.info.statuscode === 402){
                    next(createError(402))
                }
                let locations = data.locations.map(location => {
                    return {
                        street: location.street,
                        postalcode: location.postalCode,
                        city: location.adminArea5,
                        locationString: `${location.street}, ${location.postalCode}, ${location.adminArea5} `
                    }
                });

                let maneuvers = data.legs[0].maneuvers.map(maneuver => {
                    return {
                        step: maneuver.index,
                        distance: maneuver.distance,
                        narrative: maneuver.narrative,
                        direction: maneuver.directionName,
                        streets: maneuver.streets,
                        time: maneuver.time,
                        icon: maneuver.iconUrl,
                        lat: maneuver.startPoint.lat,
                        lng: maneuver.startPoint.lng
                    }
                });

                let maps = maneuvers.map(maneuver => {
                    return api.getMaps(maneuver.lat, maneuver.lng);
                });

                Promise.all(maps).then(maps => {
                    let directions = {
                        distance: data.distance,
                        totalTime: data.formattedTime,
                        fuelUsed: data.fuelUsed,
                        startLocation: locations[0],
                        endLocation: locations[1],
                        maneuvers: maneuvers,
                        maps: maps.map(map => `data:${map.headers["content-type"]};base64,${Buffer.from(map.data).toString("base64")}`)
                    };
                    res.render("directions", {location: req.query.location, title: "Directions", directions: directions});
                });
            });
    }
});

module.exports = router;
