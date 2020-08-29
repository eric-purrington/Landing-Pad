window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");

var stopTransparence = document.getElementById("stopTransparence");

var transparence = stopTransparence.offsetTop;

function myFunction() {
  if (window.pageYOffset >= transparence) {
    navbar.classList.remove("nav-trans")
  } else {
    navbar.classList.add("nav-trans");
  }
}