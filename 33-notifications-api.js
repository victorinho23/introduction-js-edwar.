// Notificacion API
// Las notificaciones api es una interfaz del navegador que permite a las aplicaciones web mostrar

const button = document.querySelector (".button");

button.addEventListener ('click', ()=> {
    console.log ("you made click");
    Notification.requestPermission().then(permission => {
        if (permission === "granted") {
            new Notification ("esta es una notificacion", {
                body : "Aprendiendo JS en el SENA"
        })
    }else {
            console.log ("permiso denegado");
            }

        });

    })
        
    



