window.onload = (event) => {
    console.log("All files downloaded and initialised.")
}

function changeImage(image) {
    document.getElementById("skill-showcaser-image").src = image
}

function setImageStyle(styleName) {
    // if (document.getElementById("skill-showcaser-image").className = styleName)
    if (styleName !== " ") {
        document.getElementById("skill-showcaser-image").className = styleName
    } else {
        document.getElementById("skill-showcaser-image").className = ""
    }
}