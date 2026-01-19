let lista = document.querySelector(".lista")
let menu = document. querySelector("#menu")

lista.style.display = 'none'

menu.addEventListener("click", function() {
    if(lista.style.display == "none") {
        lista.style.display = 'block'
    } else {
        lista.style.display = 'none'
    }
})