
function invertirPalabras(string) {
    // Dividir el string en un array de palabras
    let palabras = string.split(" ");
    
    // Invertir el orden de las palabras
    let palabrasInvertidas = palabras.reverse();
    
    // Unir las palabras invertidas en un nuevo string
    let stringInvertido = palabrasInvertidas.join(" ");
    
    // Devolver el string invertido
    return stringInvertido;
  }
  
  // uso
  let texto = "Hola mundo";
  let resultado = invertirPalabras(texto);
  console.log(resultado); 