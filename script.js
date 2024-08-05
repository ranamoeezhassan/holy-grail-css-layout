function testFunction () {
    window.alert("JS is working")
}

function showNavBar() {
    const outerContentContainer = document.querySelector(".outer-grid");
    const bodyContainer = document.querySelector("body");

    if (bodyContainer.contains("outer-grid-expanded")){
        outerContentContainer.classList.remove("outer-grid-expanded")
    } else {
        outerContentContainer.classList.add("outer-grid-expanded");
    };
}