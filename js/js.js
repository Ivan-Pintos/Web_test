function Changeheader(){
    var header_1 = document.getElementById("nav_1");
    header_1.classList.toggle("d-none")
    var header_2 = document.getElementById("nav_2");
    header_2.classList.toggle("d-none")
}
var truestate = true;
function desplegar(){
    var navContent = document.getElementById("nav_content");
    navContent.classList.toggle("d-none") 
    var boton = document.getElementById("content_btn")
    if(truestate === true){
        boton.innerHTML = `<span>Cerrar</span><i class="bi bi-x-lg text_mid"></i>`
        truestate = false;
    }else{
        boton.innerHTML = `<span>Menu</span><i class="bi bi-filter-left text_mid"></i>`
    }
    
}