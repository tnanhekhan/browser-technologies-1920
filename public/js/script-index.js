const locationForm = document.getElementById("location-form");
const locationInput = document.getElementById("location-input");
locationForm.insertAdjacentHTML("afterend", "<h2> OR </h2>\n <button class=\"location-button\">GET LOCATION FROM DEVICE</button>\n");

document.addEventListener("click", event => {
    if (event.target && event.target.className === "location-button") {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                locationInput.value = `${position.coords.latitude}, ${position.coords.longitude}`;
                locationInput.focus();
            });
        } else {
            alert("Geolocation is not supported by this browser. Please fill in your location manually.");
        }
    }
});