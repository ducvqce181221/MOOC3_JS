let oldText1, oldText2;

function getOldText() {
    oldText1 = document.getElementById("image1-3").textContent;
    oldText2 = document.getElementById("image4-6").textContent;
}

/**
 * -------------
 * Image 1 -> 3
 * -------------
 */
function upDate(previewPic) {
    getOldText();
    let divImg = document.getElementById("image1-3");
    divImg.style.backgroundImage = `url(${previewPic.src})`;
    divImg.innerHTML = previewPic.alt;
}

function unDo() {
    let divImg = document.getElementById("image1-3");
    divImg.style.backgroundImage = "";
    divImg.innerHTML = oldText1;
}

/**
 * -------------
 * Image 4 -> 6
 * -------------
 */
function upDateFocus(previewPic) {
    getOldText();
    let updateInfo = document.getElementById("image4-6");
    updateInfo.style.backgroundImage = `url(${previewPic.src})`;
    updateInfo.innerHTML = previewPic.alt;
}

function unDoBlur() {
    let updateInfo = document.getElementById("image4-6");
    updateInfo.style.backgroundImage = "";
    updateInfo.innerHTML = oldText2;
}

function imageLoad(index) {
    console.log("Image " + index + " has full loaded.");
}

window.onload = function () {
    let myImage = document.querySelectorAll("img.preview");

    for (let i = 0; i < myImage.length; i++) {
        (function (index) {
            // Assign load event
            myImage[index].addEventListener("load", function () {
                imageLoad(index);
            });

            // If the image is already loaded, call the handler function immediately
            if (myImage[index].complete) {
                imageLoad(index + 1);
            }
        })(i);
    }
};
