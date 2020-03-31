const directionContainer = document.getElementById("direction-container");
const elementBeforeToggleButton = document.getElementById("directions-message");
const steps = document.getElementsByClassName("step");
const stepper = document.getElementsByClassName("stepper")[0];

directionContainer.style.display = window.getComputedStyle(directionContainer).display;

if (directionContainer.style.display === "flex") {
    addStepScrollPositions();
    stepper.style.display = "block";
    elementBeforeToggleButton.insertAdjacentHTML("afterend", "<button class=\"view-button\">TOGGLE LIST VIEW</button>")
} else if (directionContainer.style.display === "block") {
    stepper.style.display = "none";
    elementBeforeToggleButton.insertAdjacentHTML("afterend", "<button class=\"view-button\">TOGGLE SWIPE VIEW</button>")
}

directionContainer.onscroll = function () {
    for (let i = 0; i < steps.length; i++) {
        if (steps[i].dataset.scrollPosition > directionContainer.scrollLeft) {
            steps[i].style.backgroundColor = "lightgrey";
        } else {
            steps[i].style.backgroundColor = "#2ecc71";
        }
    }
};

document.addEventListener("click", event => {
    if (event.target && event.target.className === "view-button") {
        if (directionContainer.style.display === "flex") {
            directionContainer.style.display = "block";
            event.target.innerText = "TOGGLE SWIPE VIEW";
            stepper.style.display = "none";
        } else if (directionContainer.style.display === "block") {
            directionContainer.style.display = "flex";
            event.target.innerText = "TOGGLE LIST VIEW";
            addStepScrollPositions();
            stepper.style.display = "block";
        }
    }

    if (event.target && event.target.tagName === "ARTICLE") {
        event.target.scrollIntoView({behavior: "smooth", block: "center", inline: "center"});
    }
});


function addStepScrollPositions() {
    const scrollPositionMultiplier = Math.floor((directionContainer.scrollWidth - directionContainer.clientWidth) / steps.length);
    for (let i = 0; i < steps.length; i++) {
        steps[i].dataset.scrollPosition = `${scrollPositionMultiplier * i}`;
        steps[i].addEventListener("click", event => {
            directionContainer.scrollTo({left: event.target.dataset.scrollPosition, behavior: "smooth"})
        });
    }
}


