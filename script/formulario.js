const nombre = document.getElementById("name");
const email = document.getElementById("email");
const contrasena = document.getElementById("contrasena");
const form = document.getElementById("form");
const parrafo = document.getElementById("notificacion");

form.addEventListener("submit",valor => {
    valor.preventDefault()
    let notificacion = "";
    entrar = false;
    parrafo.innerHTML = "";
    //regex extraido de https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
    let regex_email = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(nombre.value.length < 4){
        notificacion += "El nombre no es valido <br>";
        entrar = true;
    }
    if(!regex_email.test(email.value)){
        notificacion += "El correo no es valido <br>";
        entrar = true;
    }
    if(contrasena.value.length < 8){
        notificacion += "La contraseña no es valida <br>";
        entrar = true;
    }
    if(entrar){
        parrafo.innerHTML = notificacion;
    }else{
        parrafo.innerHTML = "Enviado"
    }
})

