function Changeheader(){
    var header_1 = document.getElementById("nav_1");
    header_1.classList.toggle("d-lg-flex")
    var header_2 = document.getElementById("nav_2");
    header_2.classList.toggle("d-lg-none")
}
// Esta variable controla el texto que tiene el boton al mnomento que es pulsado
// Si esta en true signifca que el texto actual es Menu si es false el texto es Cerrar
var truestate = true;
function desplegar(){
    var navContent = document.getElementById("nav_content");
    navContent.classList.toggle("animation_width_max") 
    var boton = document.getElementById("content_btn")
    var logo = document.getElementById("logo_img")
    logo.classList.toggle("d-none")
    //Intercambia el texto del boton
    if(truestate === true){
        boton.innerHTML = `<span>Cerrar</span><i class="bi bi-x-lg text_little"></i>`
        truestate = false;
    }else{
        boton.innerHTML = `<span>Menu</span><i class="bi bi-filter-left text_little"></i>`
        truestate = true;
    }
    
}
// Esta funcion sirve para cambiar tweets por el suguiente, funciona a traves de las clases que tienen los circulos blancos 
function cambiarTweetArrow(direction){
    var elemento_1 = document.getElementById("t1");
    var elemento_2 = document.getElementById("t2");
    var elemento_3 = document.getElementById("t3");
    if(direction == "derecha"){
        if(elemento_1.classList.contains("text-white") === true){
            elemento_1.classList.toggle("text-white");
            elemento_2.classList.toggle("text-white");
            cambiarTweet("t2")
        }else{
            if(elemento_2.classList.contains("text-white") === true){
                elemento_2.classList.toggle("text-white");
                elemento_3.classList.toggle("text-white");
                cambiarTweet("t3")
            }else{
                if(elemento_3.classList.contains("text-white") === true){
                    elemento_3.classList.toggle("text-white");
                    elemento_1.classList.toggle("text-white");
                    cambiarTweet("t1")
                }
            }  
        }
    }else{
        if(direction == "izquierda"){
            if(elemento_1.classList.contains("text-white") === true){
                elemento_1.classList.toggle("text-white");
                elemento_3.classList.toggle("text-white");
                cambiarTweet("t3")
            }else{
                if(elemento_2.classList.contains("text-white") === true){
                    elemento_2.classList.toggle("text-white");
                    elemento_1.classList.toggle("text-white");
                    cambiarTweet("t1")
                }else{
                    if(elemento_3.classList.contains("text-white") === true){
                        elemento_3.classList.toggle("text-white");
                        elemento_2.classList.toggle("text-white");
                        cambiarTweet("t2")
                    }
                }
            }   
        }
    }
    
}
// Esta funcion toma 3 valores la id del elemento pulsado y las id de los otros dos elementos
function changeIcono_circulo(id_elemento_pulsado, id_otro_elemento , id_otro_elemento2){
    // cambia el color de los circulos, el presionado a blanco, y los demas en negro
    var elemento_1 = document.getElementById(id_elemento_pulsado);
    if(elemento_1.classList.contains("text-white") === false){
        elemento_1.classList.toggle("text-white");
    }
    var elemento_2 = document.getElementById(id_otro_elemento);
    var elemento_3 = document.getElementById(id_otro_elemento2);
    if(elemento_2.classList.contains("text-white") === true){
        elemento_2.classList.toggle("text-white");
    }

    if(elemento_3.classList.contains("text-white") === true){
        elemento_3.classList.toggle("text-white");
    }
    //Llama a la funcion para cambiar el tweet que se muestra en la pagina con la id del circulo pulsado
    cambiarTweet(id_elemento_pulsado)
}
//Clase que cambia el contenido del tweet dependiendo del circulo blanco que este seleccionado
function cambiarTweet(tweet){
        var tweet_content = document.getElementById("tweet")
        if(tweet == "t1"){
            tweet_content.innerHTML = `
            <div class="d-flex flex-column h-50">
                <span class=""><b>Seguinos en Twitter 1</b></span>
                <br>
                <span class=""><b>Tweet numero 1</b></span>
                <i class="bi bi-twitter text-white text_mid"></i>
                <span class="text_big"><b>Boronstudio</b></span>
                <span class=" text-white">@Boronstudio</span>
                <br>
                <span> <b><i>2 hs</i></b> </span>
                <p class="" style="font-size: 1.5rem;">📌<span class="text-white ">#OportunidadLaboral</span> Llamado abierto para sumarse al equipo de <span class="text-white">@Boronstudio</span> master digital.👩‍💻👨‍💻<br> Más información 👉<span class="text-white">https://bit.ly/2OobIHS</span></p>
            </div>`
        }
        if(tweet == "t2"){
            tweet_content.innerHTML = `
            <div class="d-flex flex-column h-50">
                <span class=""><b>Seguinos en Twitter 2</b></span>
                <br>
                <span class=""><b>Tweet numero 2</b></span>
                <i class="bi bi-twitter text-white text_mid"></i>
                <span class="text_big"><b>Boronstudio</b></span>
                <span class=" text-white">@Boronstudio</span>
                <br>
                <span> <b><i>2 hs</i></b> </span>
                <p class="" style="font-size: 1.5rem;">📌<span class="text-white ">#OportunidadLaboral</span> Llamado abierto para sumarse al equipo de <span class="text-white">@Boronstudio</span> master digital.👩‍💻👨‍💻<br> Más información 👉<span class="text-white">https://bit.ly/2OobIHS</span></p>
            </div>`
        }
        if(tweet == "t3"){
            tweet_content.innerHTML = `
            <div class="d-flex flex-column h-50">
                <span class=""><b>Seguinos en Twitter 3</b></span>
                <br>
                <span class=""><b>Tweet numero 3</b></span>
                <i class="bi bi-twitter text-white text_mid"></i>
                <span class="text_big"><b>Boronstudio</b></span>
                <span class=" text-white">@Boronstudio</span>
                <br>
                <span> <b><i>2 hs</i></b> </span>
                <p class="" style="font-size: 1.5rem;">📌<span class="text-white ">#OportunidadLaboral</span> Llamado abierto para sumarse al equipo de <span class="text-white">@Boronstudio</span> master digital.👩‍💻👨‍💻<br> Más información 👉<span class="text-white">https://bit.ly/2OobIHS</span></p>
            </div>`
        }
}