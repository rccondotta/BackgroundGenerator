var _ = require('lodash')

var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var css = document.querySelector("h3");
var body = document.getElementById("gradient");
const randomButton = document.querySelector('#randomButton');

// set the initial background color
body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
css.textContent = body.style.background;

// define a function to set the gradient
function setGradient() {
    body.style.background = 
        "linear-gradient(to right, "
        + color1.value 
        + ", " 
        + color2.value 
        + ")";

    css.textContent = body.style.background;
}

// define a function to generate random colors
function setRandomColors() {
    const randomColor1 = getRandomColor();
    const randomColor2 = getRandomColor();
    color1.value = randomColor1;
    color2.value = randomColor2;
    setGradient();
    }

// define a function to generate a random hex color code
function getRandomColor() {
    const hexLetters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += hexLetters[Math.floor(Math.random() * 16)];
    }

    return color;
}

// add an event listener to input color 1
color1.addEventListener("input", setGradient);

// add an event listener to the input color 2
color2.addEventListener("input", setGradient);

// add an event listener to the random button
randomButton.addEventListener('click', setRandomColors);