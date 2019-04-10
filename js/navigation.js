// locate the navigation button element
navButton = document.getElementById("nav-button");

// locate the navigation list
navList = document.getElementById("nav-list");

// add click event listener to navButton
navButton.addEventListener('click', function(event) {
  if (navList.classList.contains("hide")) {
    navList.classList.remove("hide");
    navButton.style["background-image"] = 'url("images/miscellaneous/close_icon.svg")';
  }
  else {
    navList.classList.add("hide");
    navButton.style["background-image"] = 'url("images/miscellaneous/navigation_icon.svg")';
  };
});
