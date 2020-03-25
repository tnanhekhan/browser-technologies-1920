require('dotenv').config();

const createError = require('http-errors');
const express = require('express');
const axios = require("axios");
const CircularJSON = require('circular-json');
const result = require("./result.json");


const router = express.Router();

/* GET directions listing. */
router.get('/', function (req, res, next) {
    // Only show directions with filled in location
    if (req.query.location == null || req.query.location.length === 0) {
        next(createError(404))
    } else {
        // Api call!
        // axios.get(`http://www.mapquestapi.com/directions/v2/route?key=${process.env.API_KEY}&from=52.351074, 4.892865&to=52.360110, 4.909659`)
        //     .then(result => {
        //         let json = CircularJSON.stringify(result);
        //         res.send(json);
        //     })
        //     .catch(error => {
        //         console.log(error);
        //     });
        // res.render('directions', {location: req.query.location, title: "Directions", result: result});
        // let newResult = result.data.map(value => {
        //     console.log(value);
        // });

        // Map data into a usable form
        let data = result.data.route;
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
                icon: maneuver.iconUrl
            }
        });

        let directions = {
            distance: data.distance,
            totalTime: data.formattedTime,
            fuelUsed: data.fuelUsed,
            startLocation: locations[0],
            endLocation: locations[1],
            maneuvers: maneuvers
        };

        res.render("directions", {location: req.query.location, title: "Directions", directions: directions});
    }
});

module.exports = router;
