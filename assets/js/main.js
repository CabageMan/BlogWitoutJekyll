"use strict";

window.addEventListener("resize", resizeContent);

// Resizing content
function resizeContent() {
    console.log(`The page is resizing ${ screen.width }`)
    console.log(`The window inner width ${ window.innerWidth }`)
}