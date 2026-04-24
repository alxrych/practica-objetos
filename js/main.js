//1. Crear un objeto Persona
//Enunciado: Crea un objeto persona que tenga las propiedades: nombre, edad, y ciudad. Luego, imprime cada propiedad por separado en la consola.

const persona = {
    nombre: "Carlos",
    edad: 30,
    ciudad: "Vitoria"
};

console.log(persona.nombre);  // "Carlos"
console.log(persona.edad);    // 30
console.log(persona.ciudad);  // "Madrid"



//2. Modificar propiedades
//Enunciado: A partir del objeto persona anterior, cambia el valor de la propiedad ciudad y añade una nueva propiedad llamada profesión.
//  Luego, imprime el objeto actualizado en la consola.

const persona = {
    nombre: "Carlos",
    edad: 30,
    ciudad: "Vitoria"
};

// Cambiar la propiedad ciudad
persona.ciudad = "Barcelona";

// Añadir nueva propiedad profesión
persona.profesion = "Ingeniero";

console.log(persona);


//3. Objeto Libro
//Enunciado: Crea un objeto llamado libro con las propiedades titulo, autor, y añoPublicacion. Añade un método llamado resumen que devuelva una cadena con un resumen del libro. Ejemplo de salida: "El libro 'Cien años de soledad' fue escrito por Gabriel García Márquez en 1967."

const libro = {
    titulo: "Cien años de soledad",
    autor: "Gabriel García Márquez",
    añoPublicacion: 1967,
    resumen() {
        return `El libro '${this.titulo}' fue escrito por ${this.autor} en ${this.añoPublicacion}.`;
    }
};

console.log(libro.resumen());


//4. Array de objetos
//Enunciado: Crea un array llamado estudiantes que contenga tres objetos. Cada objeto debe representar un estudiante con las propiedades: nombre, edad, y notaFinal. Luego, recorre el array e imprime el nombre y la nota final de cada estudiante.

const estudiantes = [
    { nombre: "Ana", edad: 20, notaFinal: 8.5 },
    { nombre: "Luis", edad: 22, notaFinal: 7.0 },
    { nombre: "Marta", edad: 21, notaFinal: 9.0 }
];

estudiantes.forEach(estudiante => {
    console.log(`Nombre: ${estudiante.nombre}, Nota Final: ${estudiante.notaFinal}`);
});

// Salida:
// Nombre: Ana, Nota Final: 8.5
// Nombre: Luis, Nota Final: 7.0
// Nombre: Marta, Nota Final: 9.0



//5. Método para calcular la edad
//Enunciado: Crea un objeto persona con las propiedades nombre, anioNacimiento, y un método llamado calcularEdad que devuelva la edad actual de la persona basado en el año de nacimiento.


const persona = {
    nombre: "Carlos",
    anioNacimiento: 1995,
    calcularEdad() {
        const anioActual = new Date().getFullYear();
        return anioActual - this.anioNacimiento;
    }
};

console.log(`${persona.nombre} tiene ${persona.calcularEdad()} años.`);
// Carlos tiene 31 años



//6. Objeto Coche
//Enunciado: Crea un objeto llamado coche con las propiedades marca, modelo, año y velocidadActual. Añade un método acelerar que incremente la velocidad actual en 10 unidades y otro método frenar que disminuya la velocidad actual en 10 unidades. Asegúrate de que la velocidad no sea negativa.

const coche = {
    marca: "Toyota",
    modelo: "Corolla",
    año: 2020,
    velocidadActual: 0,
    acelerar() {
        this.velocidadActual += 10;
        console.log(`Acelerando... Velocidad actual: ${this.velocidadActual} km/h`);
    },
    frenar() {
        if (this.velocidadActual >= 10) {
            this.velocidadActual -= 10;
        } else {
            this.velocidadActual = 0;
        }
        console.log(`Frenando... Velocidad actual: ${this.velocidadActual} km/h`);
    }
};

// Ejemplo de uso:
coche.acelerar(); // Acelerando... Velocidad actual: 10 km/h
coche.acelerar(); // Acelerando... Velocidad actual: 20 km/h
coche.frenar();   // Frenando... Velocidad actual: 10 km/h
coche.frenar();   // Frenando... Velocidad actual: 0 km/h
coche.frenar();   // Frenando... Velocidad actual: 0 km/h (no baja de 0)



//7. Recorrer un objeto
//Enunciado: Crea un objeto producto con las propiedades nombre, precio, cantidad. Usa un ciclo for...in para imprimir todas las propiedades y sus valores.
// Crear el objeto producto
const producto = {
  nombre: "Ratón vertical",
  precio: 25.99,
  cantidad: 10
};

// Recorrer sus propiedades con for...in e imprimirlas
for (let propiedad in producto) {
  console.log(propiedad + ": " + producto[propiedad]);
}


//8. Contar propiedades
//Enunciado: Crea un objeto animal con al menos cinco propiedades. Luego, escribe una función que cuente y devuelva el número de propiedades que tiene el objeto.




//9. Objeto dentro de otro objeto
//Enunciado: Crea un objeto empresa que tenga las propiedades nombre y direccion. La propiedad direccion debe ser otro objeto con calle, ciudad, y codigoPostal. Luego, accede a las propiedades del objeto anidado e imprímelas.




//10. Añadir métodos a objetos
//Enunciado: Crea un objeto cuentaBancaria con las propiedades titular, saldo. Añade métodos depositar y retirar que modifiquen el saldo según sea necesario. El método retirar debe asegurarse de que no se pueda retirar más dinero del que hay disponible.