function testFunction() {
  window.alert("JS is working");
}

function showNavBar() {
  const outerContentContainer = document.querySelector(".outer-grid");
  const navContainer = document.querySelector("nav");
  outerContentContainer.classList.toggle("outer-grid-expanded");
  navContainer.classList.toggle("hide-nav");

  // Found a better way to toggle stuff
  //   if (outerContentContainer.classList.contains("outer-grid-expanded")) {
  //     outerContentContainer.classList.remove("outer-grid-expanded");
  //     navContainer.style.display = "none";
  //   } else {
  //     outerContentContainer.classList.add("outer-grid-expanded");
  //     navContainer.style.display = "";
  //   }
}
