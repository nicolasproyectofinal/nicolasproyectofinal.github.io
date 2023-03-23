/* No se estaría ejecutando correctamente las funciones de los botones. He probado y cambiado 
los nombres de los "id" y otras cosas más pero sigue sin funcionar del todo bien*/

/* Primera manera fallida:

let botondirec = document.getElementById("boton_direccion");
let botoncontacto = document.getElementById("boton_contacto");
let botoncorreo = document.getElementById("boton_correo");


botondirec.addEventListener("mouseover", function(){
        console.log("Aparece la dirección");
        document.getElementById("texto_direc").innerHTML = "Nuestra Señora del Carmen 1467";
        document.getElementById("texto_contacto").innerHTML = "";
        document.getElementById("texto_correo").innerHTML = "";
    });
        document.addEventListener("click", function(){
        document.getElementById("texto_direc").innerHTML = "";
    });


botoncontacto.addEventListener("mouseover", function(){
        console.log("Aparece el contacto");
        document.getElementById("texto_contacto").innerHTML = "(+54) 3516221400";
        document.getElementById("texto_direc").innerHTML = "";
        document.getElementById("texto_correo").innerHTML = "";
    });
        document.addEventListener("click", function(){
        document.getElementById("texto_contacto").innerHTML = "";
    });


botoncorreo.addEventListener("mouseover", function(){
        console.log("Aparece el correo");
        document.getElementById("texto_correo").innerHTML = "grossonico33@gmail.com";
        document.getElementById("texto_direc").innerHTML = "";
        document.getElementById("texto_contacto").innerHTML = "";
    });
        document.addEventListener("click", function(){
        document.getElementById("texto_correo").innerHTML = "";
    });


const botones = document.getElementsByClassName("btn")
for (let i = 0; i < botones.length; i++) {
        botones[i].style.backgroundColor = "grey"
};  */



 document.getElementById("boton_direccion");document.addEventListener("click", function () {
    console.log("Se mostró la dirección con el evento EventListener");
    document.getElementById("text_direc").innerHTML = "Nuestra Señora del Carmen 1467";
    document.getElementById("texto_contacto").innerHTML = "";
    document.getElementById("texto_correo").innerHTML = "";
});

document.getElementById("boton_contacto");document.addEventListener("click", function () {
    console.log("Se mostró el contacto con el evento EventListener");
    document.getElementById("text_contacto").innerHTML = "(+54) 3516221400";
    document.getElementById("texto_direc").innerHTML = "";
    document.getElementById("texto_correo").innerHTML = "";
});

document.getElementById("boton_correo");document.addEventListener("click", function () {
    console.log("Se mostró el correo con el evento EventListener");
    document.getElementById("texto_correo").innerHTML = "grossonico33@gmail.com";
    document.getElementById("texto_direc").innerHTML = "";
    document.getElementById("texto_contacto").innerHTML = "";
});


const botones = document.getElementsByClassName("btn")
for (let i = 0; i < botones.length; i++) {
        botones[i].style.backgroundColor = "#ECECEC"
};  

