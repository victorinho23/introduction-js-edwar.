// Programacion orientada a objetos
// Una clase en JS es una plantilla para crear objetos, que comparten mismas propiedades y metodos.
// Una clase es como un molde que describe como serian los objetos y que podrán hacer, las clases comienzan con mayuscula siempre.
// El constructor es un metodo del sistema que permite que las variables se inicalicen para usarlas en otras partes

class Product {
    constructor (productName, productPrice){
        this.productName = productName;
        this.prodctPrice = productPrice;
    }

    formatproduct (){
        return `El producto ${this.productName} tiene un precio de: ${this.prodctPrice}`
    }

};

const product1 = new Product ("Remote control", 15000);
const product2 = new Product ("SSD", 22000);
const product3 = new Product ("Tv", 1500000);


console.log (product1.formatproduct())
console.log (product2.formatproduct())
console.log (product3.formatproduct())


// Herencia en JS
// La herencia en JS permite que los objetos reutilicen propiedades y metodos de otros.

class Book extends Product { 
    constructor (bookName, bookPrice, isbn ){
        super(bookName, bookPrice);
        this.isbn = isbn;

    }

    formatproduct (){
        return `${super.formatproduct()} y su isbn es: ${this.isbn}`
    }

};

const book1 = new Book ("El perfume", 20000, 13579)

console.log (book1.formatproduct())




