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
      // in case of no .svg support change image to .png version
      if (ieVersion <= 8) {
        navButton.style["background-image"] = 'url("images/miscellaneous/close_icon.png")';
      };

      // remove transparent class from navList children
      for (child of navList.children) {
        child.classList.remove("transparent");
      };
    }
    else {
      navList.classList.add("hide");
      navButton.style["background-image"] = 'url("images/miscellaneous/navigation_icon.svg")';
      // in case of no .svg support change image to .png version
      if (ieVersion <= 8) {
        navButton.style["background-image"] = 'url("images/miscellaneous/navigation_icon.png")';
      };

      // add transparent class to navList children
      for (child of navList.children) {
        child.classList.add("transparent");
      };
    };
  });

  // detect IE version. Source: https://makandracards.com/makandra/53475-minimal-javascript-function-to-detect-version-of-internet-explorer-or-edge
  const ieVersion = function(uaString) {
    uaString = uaString || navigator.userAgent;
    var match = /\b(MSIE |Trident.*?rv:|Edge\/)(\d+)/.exec(uaString);
    if (match) return parseInt(match[2])
  }();

  // detect if user is using IE6 and if so change width of #nav-list a
  // This is neccessary because IE6 does not support min-width and max-width


  if (ieVersion <= 6) {
    // call the setIE6NavListWidth and add a resize event listener that calls
    // the function when the window is resized
    setIE6NavListWidth();

    // add scroll event
    let scrollTriggered = false;
    window.addEventListener('resize', function(e) {
      if (!scrollTriggered) {
        scrollTriggered = true;
        setIE6NavListWidth();
        window.setTimeout(function () {
          scrollTriggered = false;
        }, 100);
      };
    });

    function setIE6NavListWidth() {
      // get vieport width
      // source: https://stackoverflow.com/a/8876069
      let vw = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

      let navButtonWidth;
      if (vw < 578) {
        navButtonWidth = "100%";
      }
      else if (vw < 1160) {
        navButtonWidth = "48%";
      }
      else { //vw >= 1160
        navButtonWidth = "24%";
      };

      const navList = document.getElementById("nav-list");
      for (let child of navList.children) {
        if (child.tagName === "A") {
          child.style.width = navButtonWidth;
        };
      };
    };
  };

  // for IE versions 8 and less change all .svg images to .png images

  if (ieVersion <= 8) {
    // change all .svg images to .png images

    const techLogos = document.getElementsByClassName("logo");
    for (let logo of techLogos) {
      logo.src = logo.src.slice(0, -3) + "png";
    };

    const icons = document.getElementsByClassName("icon");
    for (let icon of icons) {
      icon.children[0].src = icon.children[0].src.slice(0, -3) + "png";
    };
  };
};
