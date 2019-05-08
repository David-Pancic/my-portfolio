{ // hide from global scope

function logosEffectNarrow(vh, vw) {
  // locate technology sections
  const techSections = document.getElementsByClassName("technology");

  for (section of [...techSections]) {

    // find distance from top of viewport and top and bottom of sections
    let rect = section.getBoundingClientRect();
    let top = rect.top;
    let bot = rect.bottom;

    // add or remove class "emphasized" when section close to the top or
    // bottom of the viewport
    if (top < vh * 0.7 && bot > vh * 0.6) {
      section.classList.add("emphasized");
    }
    else {
      section.classList.remove("emphasized");
    };
  };
};

function logosEffectWide(vh, vw) {
  // locate the logo images
  const logos = document.getElementsByClassName("logo");

  // locate the tech-intro
  const intro = document.getElementById("tech-intro");

  // locate one of the technology lists
  const list = document
    .getElementsByClassName("technology")[0]
    .getElementsByTagName("ul")[0];

  // find the distance from the bottom of the #tech-intro and top of viewport
  let introBot = intro.getBoundingClientRect().bottom;

  // find the distance from the top of one of the lists and top of viewport
  let listTop = list.getBoundingClientRect().top;

  // add or remove class "together" when appropriate
  if (introBot < vh * 1 && listTop > vh * 1) {
    for (logo of logos) {
      logo.classList.add("together");
    };
  }
  else {
    for (logo of logos) {
      logo.classList.remove("together");
    };
  };
};

function logosEffect() {
  // get vieport height and width
  // source: https://stackoverflow.com/a/8876069
  let vh = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  let vw = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

  // effects for a screen too narrow for 3 columns
  if (vw < 950) {
    logosEffectNarrow(vh, vw);
  }
  // effects for a screen wide enough for 3 columns
  else {
    logosEffectWide(vh, vw);
  };
}

// add scroll event
let scrollTriggered = false;
window.addEventListener('scroll', function(e) {
  if (!scrollTriggered) {
    scrollTriggered = true;
    logosEffect();
    window.setTimeout(function () {
      scrollTriggered = false;
    }, 100);
  };
});

};
