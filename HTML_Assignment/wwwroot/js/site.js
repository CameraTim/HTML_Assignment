// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.
var opac = document.getElementById("trans");
opac.style.opacity = 1;
opac.style.transition = "opacity 1s";

function transAction() {
    if (opac.style.opacity == 1) {
        turnOff()
    } else {
        turnOn()
    }

}

function turnOn() {
    opac.style.opacity = 1;
}

function turnOff() {
    opac.style.opacity = 0;
}