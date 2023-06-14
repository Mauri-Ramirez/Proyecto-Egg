/* function realizarOperaciones(num1, num2) {
    let suma = num1 + num2;
    let resta = num1 - num2;
    let multiplicacion = num1 * num2;
    let division = num1 / num2;
  
    let resultado = {
      suma: suma,
      resta: resta,
      multiplicacion: multiplicacion,
      division: division
    };
  
    return resultado;
  }
  

  let num1 = 10;
  let num2 = 5;
  let operaciones = realizarOperaciones(num1, num2);
  console.log(operaciones); */

  function realizarOperaciones() {
    let num1 = parseFloat(prompt("Ingresa el primer número:"));
    let num2 = parseFloat(prompt("Ingresa el segundo número:"));
  
    let suma = num1 + num2;
    let resta = num1 - num2;
    let multiplicacion = num1 * num2;
    let division = num1 / num2;
  
    let resultado = {
      suma: suma,
      resta: resta,
      multiplicacion: multiplicacion,
      division: division
    };
  
    return resultado;
  }
  
  
  let operaciones = realizarOperaciones();
  console.log(operaciones);

