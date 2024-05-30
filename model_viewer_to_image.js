function modelViewerToImage(id) {
    var bottleCanvas = document.getElementById(id);
    var dataURL = bottleCanvas.toDataURL("image/png");
    return dataURL;
}