const funciones = {
  //FUNCION ESPAR
  isEvenNumber: function(num){
      return num%2 === 0;
    },
    
  //FUNCION SUMATORIA DIGITOS
  addDigits: function(digt){
  let totalS = 0;
    for(let i=0; i<digt.length; i++){
      let numDigit = parseInt(digt[i]);
      totalS += numDigit;
    }
    return totalS
  },

  //FUNCION ES PALINDROME
  isPalindrome: function(str){
      let wordStr = str.split('');
      let textR = str;
      let textL = "";
      for (let i= textR.length-1; i>=0; i= i-1){
        textL += wordStr[i];
      }
      if (textR === textL){
        return true
      }
      else{
        return false
      }
    },
    
  //FUNCION DIVISORES
  numDivisor: function(num){
    let cantDiv = 0;
    for (let i= 1; i<=num; i++){
      if (num % i === 0){
        cantDiv++
      }
    }
    return cantDiv
  }
}
export default funciones;