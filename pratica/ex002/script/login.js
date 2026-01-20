let menu = document.querySelector("#menu");
let lista = document.querySelector(".lista");

menu.addEventListener("click", function() {

    if(lista.style.display == 'none') {
        lista.style.display = 'block';
    } else if(lista.style.display = 'block') {
        lista.style.display = 'none';
    }
});