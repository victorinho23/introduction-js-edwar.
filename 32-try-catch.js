// Try catch
// Es una estructura para manejar errores en tiempo de ejecucuion, permitiendo que el programa continue ejecutandose sin fallar completamente.
// try: dentro de este bloque que se puede generar un error.
// catch: captura el error sin ocurre dentro de try y permite manejarlo.

const num = 10;
const num3 = 30;

console.log (num);

try {
   console.log (num2)
} catch (error){
    console.log ("error, la variable no existe")
}

console.log (num3);

// Ejercisio 2

try {
    console.log(x)
} catch (error){
    console.log ("ocurrio un error", error.message)
}

// throw: lanza manualmente un error
// JS lanza un error y detiene inmediatamente la ejecucuion dentro del bloque try, si existe el error se para inmediatamente la ejecucion asi existan 10 lineas mas, ahora si no existe el eerror esta sis se ejecutan.

function divide (num5,num6){
    try {
        if (num6 === 0) throw "no se puede dividir entre 0";
        console.log ("esto no se ejecuta cuando exista el error")
        return num5/num6

    } catch (error) {
        return "Error", error;
    
    } 

}

console.log (divide (10,0))