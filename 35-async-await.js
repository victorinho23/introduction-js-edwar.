/**
 * Async await
 * 
 *  Son caracteristicas de JS que facilitan trabajarcon funciones asincronicas, permitiendo escribir codigo que se parece mas al síncrono y es mas facil de leer.
 * 
 * Antes del 2015 se usaba .then() y catch(), pero ahora se usa async y await que internamente siguien usando promesas.
 * 
 * async: Declara una funcion asincronica, que siempre devuelve una promesa.
 * await: Pausa la ejecucion de la funcion, async hasta que una promesa se resuelve o rechaza, devolviendo como resultado una promesa.
 */

// Ejemplo con una funcion que se cumple

function downloadNewclients (){
    return new Promise (resolve => {
        console.log ("Descargando clientes... espere por favor")

        setTimeout (() => {
            resolve("Los clientes fueron descargados")
        }, 3000);
    });


};

async function app (){
    try {
     const result = await downloadNewclients();
     const result1 = await downloadOrders();
     
     // Codigo bloqueado hasta que se resuelva la promesa
     console.log ("Codigo que si se bloquea")
     console.log (result)
     console.log(result1)
    }catch (error){
        console.log (error);

    }
}


console.log ("Codigo que no se bloquea")

function downloadOrders (){
    return new Promise (resolve => {
    console.log ("Descargando los pedidos, espere un momento papi")

    setTimeout(()=> {
        resolve ("Los pedidos han sido descargados")
    },10000)

})}

async function orders (){
    try {
        const resultado = await downloadOrders();
        // console.log(resultado)

        const result2 = await Promise.all([downloadNewclients(), downloadOrders()]);

        console.log (result2[0])
        console.log (result2[1])

    }catch (error){
        console.log (error)
    };
};



orders ()
// Ahora se va a intentar una forma mas eficiente sin que dependa una de la otra



