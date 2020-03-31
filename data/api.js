require('dotenv').config();
const axios = require('axios');

async function getDirections(query) {
    let baseUrl = "http://www.mapquestapi.com/directions/v2/route?key=";
    let authorization = process.env.API_KEY;
    let params = `&from=${query}&to=52.359188, 4.908178`;
    try {
        return await axios.get(baseUrl + authorization + params);
    } catch (error) {
        console.log(`Something went wrong: ${error}`);
    }
}

async function getMaps(lat, lng) {
    let baseUrl = "https://maps.locationiq.com/v2/staticmap?key=";
    let authorization = process.env.MAPS_ACCESS_TOKEN;
    let params = `&center=${lat},${lng}&zoom=17&size=1000x500&markers=${lat},${lng}|icon:small-red-cutout&format=jpg`;
    try {
        return await axios.get(baseUrl + authorization + params, {responseType: 'arraybuffer'});
        // return await axios.get("https://via.placeholder.com/500x500", {responseType: 'arraybuffer'});
    } catch (error) {
        console.log(`Something went wrong: ${error}`);
    }
}


module.exports = {
    getDirections,
    getMaps
};