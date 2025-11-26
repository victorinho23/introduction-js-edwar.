// Estructura de control if

// const score= Number(prompt ( "ingrese el puntaje"))

// if (score == 100){
//     console.log ("si, el puntaje es 100")
// } else {
//     console.log ("el puntaje es diferente a 100");
// }

// if (score !== 100) {
//     console.log ("El puntaje es diferente de 100")
// } else {
//     console.log("si el puntaje es 100")
// }

const rol = String (prompt("ingrese su rol"))

if (rol == "admin") {
    console.log ("Tienes acceso a todo el sistema")
}else if (rol == "editor"){
    console.log ("puedes editar funciones basicas")
} else {
    console.log ("No tienes acceso al sistema")
}

