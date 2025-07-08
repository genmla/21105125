
var homeNav = document.getElementById("homeNav");
var storyNav = document.getElementById("storyNav");
var RSVPNav = document.getElementById("RSVPNav");
var regNav = document.getElementById("regNav");
var chiNav = document.getElementById("chiNav");
var inactiveNav = document.getElementsByClassName("inactiveNav")
var homeSection = document.getElementById("homeSection");
var storySection = document.getElementById("storySection");
var rsvpSection = document.getElementById("rsvpSection");
var registrySection = document.getElementById("registrySection");
var chicagoSection = document.getElementById("chicagoSection");

// var navBar = document.getElementById("navBar");
// var sticky = navBar.offsetTop;

// window.onscroll = function () {
//  if (window.pageYOffset > sticky) {
//     navBar.classList.add("sticky");
//  } else {
//     navBar.classList.remove("sticky");
//  }
// }

homeNav.addEventListener("click", function (event) {
    var selection = event.target;

    if (selection = homeNav) {
        homeNav.className = "activeNav"
        homeSection.className = "displaySection"
        storyNav.className = "inactiveNav"
        storySection.className = "nodisplaySection"
        RSVPNav.className = "inactiveNav"
        rsvpSection.className = "nodisplaySection"
        regNav.className = "inactiveNav"
        registrySection.className = "nodisplaySection"
        chiNav.className = "inactiveNav"
        chicagoSection.className = "nodisplaySection"
    }
})

storyNav.addEventListener("click", function (event) {
    var selection = event.target;

    if (selection = storyNav) {
        homeNav.className = "inactiveNav"
        homeSection.className = "nodisplaySection"
        storyNav.className = "activeNav"
        storySection.className = "displaySection"
        RSVPNav.className = "inactiveNav"
        rsvpSection.className = "nodisplaySection"
        regNav.className = "inactiveNav"
        registrySection.className = "nodisplaySection"
        chiNav.className = "inactiveNav"
        chicagoSection.className = "nodisplaySection"
    }
})

RSVPNav.addEventListener("click", function (event) {
    var selection = event.target;

    if (selection = RSVPNav) {
        homeNav.className = "inactiveNav"
        homeSection.className = "nodisplaySection"
        storyNav.className = "inactiveNav"
        storySection.className = "nodisplaySection"
        RSVPNav.className = "activeNav"
        rsvpSection.className = "displaySection"
        regNav.className = "inactiveNav"
        registrySection.className = "nodisplaySection"
        chiNav.className = "inactiveNav"
        chicagoSection.className = "nodisplaySection"
    }
})

regNav.addEventListener("click", function (event) {
    var selection = event.target;

    if (selection = regNav) {
        homeNav.className = "inactiveNav"
        homeSection.className = "nodisplaySection"
        storyNav.className = "inactiveNav"
        storySection.className = "nodisplaySection"
        RSVPNav.className = "inactiveNav"
        rsvpSection.className = "nodisplaySection"
        regNav.className = "activeNav"
        registrySection.className = "displaySection"
        chiNav.className = "inactiveNav"
        chicagoSection.className = "nodisplaySection"
    }
})

chiNav.addEventListener("click", function (event) {
    var selection = event.target;

    if (selection = chiNav) {
        homeNav.className = "inactiveNav"
        homeSection.className = "nodisplaySection"
        storyNav.className = "inactiveNav"
        storySection.className = "nodisplaySection"
        RSVPNav.className = "inactiveNav"
        rsvpSection.className = "nodisplaySection"
        regNav.className = "inactiveNav"
        registrySection.className = "nodisplaySection"
        chiNav.className = "activeNav"
        chicagoSection.className = "displaySection"
    }
})

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}