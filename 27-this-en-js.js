// This ess una palabra reservada del sisema, o sea no se puede
//crear ni funciones, ni variables con este nombre

const RESERVATION =  {
    userName : "Victor",
    lastName : "Cortes",
    userAge : 18,
    total : 100000, 
    ispaid: false,

// Los objetos pueden contener funciones 

    information : function () {
        console.log(`El cliente ${this.userName} reservo y la cantidad a pagar es: ${this.total}, hasta el momento el estado del pago es: ${this.ispaid}`);
    }

};



const RESERVATION2 =  {
    userName : "Hernan",
    lastName : "Caicedo",
    userAge : 19,
    total : 150000, 
    ispaid: true,

// Los objetos pueden contener funciones 

    information: function () {
        console.log(`El cliente ${this.userName} reservo y la cantidad a pagar es: ${this.total}, hasta el momento el estado del pago es: ${this.ispaid}`);
    }

};

// This en este contexto hace referencia al objeto sobre el cual
// se esta mandando a llamar.
// Es obligatorio usar la funcion de esta manera, porque esta hace referncia 
// al objeto que se esta usando.

RESERVATION.information ();
RESERVATION2.information ();

const RESERVATION3 =  {
    userName : "David",
    lastName : "Suarez",
    userAge : 21,
    total : 50000, 
    ispaid: true,

// Los objetos pueden contener funciones 

    information:  () => {
        console.log(`El cliente ${this.userName} reservo y la cantidad a pagar es: ${this.total}, hasta el momento el estado del pago es: ${this.ispaid}`);
    }

};

// Si se usa arrwo function no es capaz de leer los datos del contexto 
// dando como resultado UNDEFINED.
RESERVATION3.information ();