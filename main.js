// Ejemplo de destructuración de objetos
const persona = { nombre: 'John', edad: 30, ciudad: 'Nueva York', estado: 'casado' };

const name1 = persona.nombre
const edad1 = persona.edad

console.log(name1);
console.log(edad1);

const { nombre, edad, ...resto } = persona
console.log(nombre);
console.log(edad);
// console.log(city);
console.log(resto);


// Ejemplo de destructuración de arreglos
const colores = ['rojo', 'verde', 'azul', 'green'];
const rojo = colores[0]
console.log(rojo);

const verde = colores[1]
console.log(verde);

const [red, green, ...restoDelArray] = colores
console.log(red);
console.log(green);
console.log(restoDelArray);


// Ejemplo del operador spread
const arreglo1 = [1, 2, 3];
const arreglo2 = [4, 5, 6];
const newArray = arreglo1.concat(arreglo2)
console.log(newArray);

const array3 = [...arreglo1, ...arreglo2]
console.log(array3);




// Ejemplo de forEach
const numeros2 = [1, 2, 3, 4, 5];

const newNumber = numeros2.forEach((numero) => {
  const doble = numero * 2
  console.log(doble);
})

console.log(newNumber);


// Ejemplo de reduce
const numeros = [1, 2, 3, 4, 5];

const suma = numeros.reduce((acumulador, valor) => acumulador + valor, 0)
console.log(suma);


// Ejemplo de map
const suma2 = numeros.map((elem) => elem * 2)
console.log(suma2);
console.log(numeros);



// Ejemplo de filter
const personas = [
  { nombre: "Alice", edad: 25 },
  { nombre: "Bob", edad: 30 },
  { nombre: "Carol", edad: 28 },
  { nombre: "David", edad: 35 },
  { nombre: "Eve", edad: 22 }
];

const personasMayoresA25 = personas.filter((person) => person.edad > 25)
console.log(personasMayoresA25);


// Ejemplo de find -> devuelve el primero que encuentra

const personaQueBusco = personas.find((person) => person.nombre === 'Carol')
console.log(personaQueBusco);

// Ejemplo de funciones flecha
function saludar() {
  console.log('Hola');
}

saludar()

const dobleValor = (a) => {
  const number = a + 4
  return number * 2
}

console.log(dobleValor(3));

const cuadrado = (a) => a ** 2

console.log(cuadrado(4));


const saludar2 = (nombre) => `Hola, que tal ${nombre}?`

console.log(saludar2('Dayana'));
