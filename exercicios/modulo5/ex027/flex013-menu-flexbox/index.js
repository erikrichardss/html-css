const buttonMenu = document.querySelector(".button-menu");
const listaMenu = document.querySelector(".lista");

buttonMenu.addEventListener("click", () => {

    listaMenu.classList.toggle("lista-toggle");

})