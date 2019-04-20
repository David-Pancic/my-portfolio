{ // Hide from global scope
  // Remove showoff class from name-container

  // locate name-container
  const nameCont = document.getElementById("name-container");

  // remove showoff class
  nameCont.classList.remove("showoff");

  // Add navigation button functionality

  // locate the navigation button element
  const navButton = document.getElementById("nav-button");

  // locate the navigation list
  const navList = document.getElementById("nav-list");

  // add click event listener to navButton
  navButton.addEventListener('click', function(event) {
    if (navList.classList.contains("hide")) {
      navList.classList.remove("hide");
      navButton.style["background-image"] = 'url("images/miscellaneous/close_icon.svg")';

      // remove transparent class from navList children
      for (child of navList.children) {
        child.classList.remove("transparent");
      };
    }
    else {
      navList.classList.add("hide");
      navButton.style["background-image"] = 'url("images/miscellaneous/navigation_icon.svg")';

      // add transparent class to navList children
      for (child of navList.children) {
        child.classList.add("transparent");
      };
    };
  });
};
