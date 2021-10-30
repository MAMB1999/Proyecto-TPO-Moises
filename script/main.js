

var description_actual = [];
var roles = 6;
const contenedor_pag = document.getElementById("contenedor_campeones");
const selector_campeones = document.querySelectorAll(".lista_roles");
iniciar_campeones();


function iniciar_campeones(){
    campeones.forEach((campeon,index) =>{
        if(campeon.rol.find(indice => indice == roles) == roles){
            const li = document.createElement("li");
            const a = document.createElement("a");
            const div = document.createElement("div");
            div.className = "contenedor_campeones_img";
            //modificaciones a li y a
            li.className = "contenido_campeon";
            //agrega al dom
            
                div.appendChild(mostrar_imagenes(index));
                a.appendChild(div);
                a.appendChild(mostrar_titulo_description(index));
                li.addEventListener("click",() => mostrar_description(index));
                li.appendChild(a);
                contenedor_pag.appendChild(li);
        }
        
    })
}

// agregar imagenes
function mostrar_imagenes(showindex){
    const img = document.createElement("img");
    img.src = campeones[showindex].imagen;
    return img;
}
//agregar descripcion
function mostrar_titulo_description(showindex){
    const div_contenedor = document.createElement("div");
    const h2 = document.createElement ("h2");
    const p = document.createElement("p");
    let nombre_campeon = campeones[showindex].name;
    h2.textContent = nombre_campeon;
    p.textContent = campeones[showindex].description;
    p.className = "contenedor_descripcion";
    div_contenedor.appendChild(p);
    div_contenedor.appendChild(h2)
    return div_contenedor
}
//mostrar description
function mostrar_description(showindex){
    let elemento = document.getElementsByClassName("contenedor_descripcion")[showindex];
    if(description_actual.includes(showindex) !== true ){
        elemento.style.height = "200px"
        description_actual.push(showindex);
    }
    else{
        
        elemento.style.height = "0px"
        description_actual.splice(description_actual.indexOf(showindex),1);
        
    }
     
   
}