function upDate(previewPic) {
    let divImg = document.getElementById("image");
    divImg.style.backgroundImage = `url(${previewPic.src})`;
    divImg.innerHTML = previewPic.alt;
}

function unDo() {
    let divImg = document.getElementById("image");
    divImg.style.backgroundImage = "";
    divImg.innerHTML = "Hover over an image below to display here.";
}
