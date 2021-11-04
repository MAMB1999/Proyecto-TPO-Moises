
var contenedor_img = document.querySelectorAll(".final_presentacion_flex > div");

function procesar_img(){
    if(window.screen.width <= 400){
        contenedor_img.forEach(x => x.style.display = "none")
        contenedor_img[0].style.display = "block";
    }else if(window.screen.width > 800){
     
    }
    
}

procesar_img()