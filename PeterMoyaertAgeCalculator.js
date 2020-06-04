"use strict";

let dateOfBirth = new Date(1977, 7, 16); // 0 is January
let now = new Date();
let age = now.getFullYear() - dateOfBirth.getFullYear();
if ((dateOfBirth.getMonth() >= now.getMonth()) && (dateOfBirth.getDate() > now.getDate())) {
    age--;
}
document.getElementById("leeftijd").innerHTML = age;

// disable onclick Showcase
document.getElementById("showcase").onclick
