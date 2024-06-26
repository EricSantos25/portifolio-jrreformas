let slideIndex = 1

showSlides(slideIndex)

function plusSlides(slideNumber) {
    showSlides(slideIndex += slideNumber)
}

function showSlides(slideNumber) {
    let slideImages = document.getElementsByClassName("carrosel")
    if (slideNumber > slideImages.length) {
        slideIndex = 1
    }

    if (slideNumber < 1) {
        slideIndex = slideImages.length
    }

    for (let index = 0; index < slideImages.length; index++) {
        slideImages[index].style.display = "none"
    }

    slideImages[slideIndex-1].style.display = "block"
}


const clientes = document.getElementsByClassName("customer-slide")

function checarFinalDaPagina() {
    const tamanho = clientes.getBoundingClientRect();
    if (tamanho.left >= window.innerWidth) {
        clientes.style.left = '-50px'
    }
}

setInterval(checarFinalDaPagina, 100)