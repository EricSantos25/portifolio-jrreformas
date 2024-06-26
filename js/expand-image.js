let imagesExpanded = document.getElementById("imageExpand");

function expandImage(figure) {
    imagesExpanded.src = figure.src;
    imagesExpanded.parentElement.style.display = "block";
}