// Solicitar permisos para uso de camara y microfono.

const button = document.querySelector(".button");

button.addEventListener ("click", async() =>{

    try {

        await navigator.mediaDevices.getUserMedia({video: true, audio : true}); 

    const permission = await Notification.requestPermission();
    
    console.log (`Estado del permiso ${permission}`);

    if (permission === "granted"){
        new Notification("Permiso concedido", {
            body : "¡Camara y microfono activada",
            icon : "/assets/icons/messias.png"

        })
    } else {
        console.log (`Permiso denegado`)
    }
      
}catch (error){
        console.log(`Error al solcitar el permiso`, error);
        alert (`No se concedieron los permisos`)

    }

});