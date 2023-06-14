//function showAlert() { alert("hola desde js")}


/* function sumar (num1, num2) {
    return  num1 + num2
    
}

let resultado = sumar(5, 6)

console.log( alert(resultado)); */



//------------------------------------------------

/* let apellido = prompt("Ingresa un apellido");
console.log(apellido);  */

//typeof :El operador typeof devuelve una cadena que indica el tipo del operando sin evaluarlo
//parseInt: Convierte (parsea) un argumento de tipo cadena y devuelve un entero de la base especificada.

/*  let numeroUno = prompt("Ingresa el primero número");
let numeroDos = prompt("Ingresa el segundo número");
console.log(typeof numeroUno);
let resultado = numeroUno + numeroDos;
console.log(resultado)  
 */
/*  let numeroUno = prompt("Ingresa el primero número");
let numeroDos = prompt("Ingresa el segundo número");

console.log(typeof numeroUno);

let resultado = parseInt(numeroUno) + parseInt(numeroDos);
console.log(resultado); 
 */

//-------------------------------------------------------

 //operadores relacionales :mayor que (>), menor que (<), mayor o igual (>=), menor o igual (<=), igual que (===) y distinto de (!==).

/* let resultado = 20 > 10;
let resultadodos = 20 < 10;
let resultadotres = 20 === "20";

console.log(resultado);
console.log(resultadodos);
console.log(resultadotres); 

 */
//-----------------------------------------------------------------

//Operadores logicos
//&& : Si los dos son verdaderos devuelve verdadero.
//|| : Con que uno sea verdadero devolverá verdadero.
// ! : Negación

/* let resultado1 = true && true;
let resultado2 = 20 > 10 && 10 < 20;
let resultado3 = true && true && false;
let resultado4 = true || false;
let resultado5 = !false;


console.log(resultado1);
console.log(resultado2);
console.log(resultado3);
console.log(resultado4);
console.log(resultado5);
  */

//----------------------------------------------------

//  if/else : se utiliza para evaluar una expresión condicional: si se cumple la condición (es verdadera), ejecutará un bloque de código.

/* if (condicion) {
    // bloque verdadero
} else {
    // bloque falso
}
 */


/*  let textJavascript = prompt("Escriba 'javascript'");

if (textJavascript === "javascript") {
    console.log("Lo escribiste super bien!");
} else {
    console.log("Lo escribiste mal");
}
 */


/* let numUsuario = prompt("Ingrese numero del 1 al 10");

console.log(numUsuario + " Es: " + typeof numUsuario);

console.log(parseInt(numUsuario));

if (parseInt(numUsuario) <= 10) {
    // Sentencia true
    console.log("Genial!!");
} else {
    // Sentencia false
    console.log("Super mal!!");
} 
 */

//----------------------------------------------------


//switch >valúa una expresión, comparando el valor de esa expresión con una instancia case, y ejecuta declaraciones asociadas a ese case, así como las declaraciones en los case que siguen.

//plantillas literales :  son cadenas literales que habilitan el uso de expresiones incrustadas. Con ellas, es posible utilizar cadenas de caracteres de más de una línea, y funcionalidades de interpolación de cadenas de caracteres.
 
//interpolacion : alt + 96 

/*  let opcionUser = prompt(`
Elija una opción:
1: Libros
2: Películas
3: Juegos
`);

switch (opcionUser) {
    case "1":
        console.log("Principito");
        break;
    case "2":
        console.log("Matrix");
        break;
    case "3":
        console.log("NFS");
        break;
    default:
        console.log("Opción no válida");
        break;
}
 */

//----------------------------------------------------------

 

//while : Crea un bucle que ejecuta una sentencia especificada mientras cierta condición se evalúe como verdadera. Dicha condición es evaluada antes de ejecutar la sentencia.

/* let numero = 0;
while (numero <= 10) {
    console.log(numero);
    numero++; //numero = numero + 1;
}
console.log("FIN: " + numero);    */

///------------------------------***---////////

const form = document.getElementById('myForm');
form.addEventListener('submit', function(event) {
  event.preventDefault();
  validateForm();
});

function validateEmail(email) {
    const regex =  /^[^\s@]+@[^\s@]+\.[^\s@]{2,7}$/
    return regex.test(email)
  }
  function validateForm() {
    const emailInput = document.getElementById('email');
    const email = emailInput.value;
    if (!validateEmail(email)) {
      alert('Por favor ingrese un correo electrónico válido.');
    } else {
      alert('Correo electrónico enviado correctamente.');
    }
  }