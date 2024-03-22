const aceso = document.getElementById("aceso")
const apagado = document.getElementById("apagado")
const ligado = document.getElementById("ligado")
const desligado = document.getElementById("desligado")


function apagar() {
    aceso.style.display = "none"
    apagado.style.display = "block"

    desligado.style.background = "rgba(202, 202, 202, 0.836)"
    desligado.style.boxShadow = "none"

    ligado.style.background = "rgb(230, 229, 229)"
    ligado.style.boxShadow = "2px 2px 2px 1px rgba(0, 0, 0, 0.2)"
}

function acender() {
    apagado.style.display = "none"
    aceso.style.display = "block"

    ligado.style.background = "rgba(202, 202, 202, 0.836)"
    ligado.style.boxShadow = "none"

    desligado.style.background = "rgb(230, 229, 229)"
    desligado.style.boxShadow = "2px 2px 2px 1px rgba(0, 0, 0, 0.2)"
}
