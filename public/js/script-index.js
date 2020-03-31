const locationForm = document.getElementById("location-form");
const locationInput = document.getElementById("location-input");

if (navigator.geolocation) {
    locationForm.insertAdjacentHTML("afterend", "<h2> OR </h2>\n <button class=\"location-button\">GET LOCATION FROM DEVICE</button>\n");
    document.addEventListener("click", event => {
        if (event.target && event.target.className === "location-button") {
            navigator.geolocation.getCurrentPosition(position => {
                locationInput.value = `${position.coords.latitude}, ${position.coords.longitude}`;
                locationInput.focus();
            });
        }
    })
}
