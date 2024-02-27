//creo una funcion para que se ejecute dando click en el boton 
function muestra_oculta(id){
    let div = document.getElementById(id);
    //uso de if para ver si el el div esta oculto 
    if (div.style.display =="none"){
        div.style.display = "flex";
    }
    else{
        div.style.display = "none";
    }
}