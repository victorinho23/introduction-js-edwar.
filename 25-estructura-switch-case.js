// Estructura switch

// Permite evaluar una expresion y ejecutar diferentes bloques de codigo segun el caso que coincida,
// poe decirlo de otro modo es una especie de validacion segun lo que se ingrese.

const paymentMethod = String(prompt ("ingrese su metodo de pago"))

switch (paymentMethod) {
    case "card":
        console.log ("pagaste con card")
      break;
    case "bitcoin":
        console.log ("pagaste con bitcoin")
        break;
    case "debitcard":
        console.log ("pagaste con debitcard")
        break;
        case "creditcard":
            console.log ("pagaste con creditcard")
            break;

}

