import funciones from './funciones.js';

//------------------ELEMENTOS DEL HTML-------------------
//Exercise 41
const inputOne = document.getElementById('uno');
const spanEvenNumber = document.getElementById('par');
const spanOddNumber = document.getElementById('inpar');
let inputNum = 0;
let evenSum = 0;
let oddSum = 0;

//Exercise 42
const inputDigits = document.getElementById('digitos');
const spanSumDigits = document.getElementById('sumatoria');
const spanDigits = document.getElementById('digitoSS');

//Exercise 43
const inputIntegerNum = document.getElementById('ingreso');
const spanInteger = document.getElementById('impares');

//Exercise 44
const inputWord = document.getElementById('palabras');
const spanNumPalindrome = document.getElementById('totalPalindromos');
let numPalindrome = 0;

//Exercise 45
const inputIntNumber = document.getElementById('enteros');
const spanNumDivisor = document.getElementById('dobleDivisor');
let doubleDiv = 0;


//---------------EVENTOS DE LOS BOTONES------------------------
//Exercise 41
const bAdd = document.getElementById('sumar');
bAdd.addEventListener('click', function(){
  let one = parseInt(inputOne.value);
  inputNum++
  if (inputNum >= 11){
    alert("OK ya tenemos 10");
    spanEvenNumber.textContent = evenSum;
    spanOddNumber.textContent = oddSum;
  }
  if (funciones.isEvenNumber(one)){
      evenSum += one;
    }
  else{
      oddSum += one;
    }
  inputOne.value = "";
});

//Exercise 42
const bAddDigit= document.getElementById('sumaDigitos');
bAddDigit.addEventListener('click', function(){
  let digits = inputDigits.value; 
  if(digits === '100'){
    alert("Termina ingreso de sumatoria de dígitos");
    spanDigits.textContent = "X";
    spanSumDigits.textContent= "X";
  }
  else{
    let totalS = funciones.addDigits(digits);
    spanDigits.textContent = digits;
    spanSumDigits.textContent= totalS;
  }
  inputDigits.value = "";
});

//Exercise 43
const bProcess= document.getElementById('procesa');
bProcess.addEventListener('click', function(){

  let integerNum = inputIntegerNum.value;
  let addTotal = funciones.addDigits(integerNum);

  if(addTotal > 999 || addTotal%5===0){
    spanInteger.textContent = oddSum;
  }
  else if(!funciones.isEvenNumber(integerNum)){
    oddSum++
  }
  inputDigits.value = "";
});

//Exercise 44
const bCheck = document.getElementById('comprobar');
bCheck.addEventListener('click', function(){
  let word = inputWord.value; 
  if(word === "fin"){
    spanNumPalindrome.textContent = numPalindrome; 
  }
  else if(funciones.isPalindrome(word)){
    numPalindrome++
  }
  inputWord.value = "";
});

//Exercise 45
const bToShow = document.getElementById('mostrar');
bToShow.addEventListener('click', function(){
  intNumber = inputIntNumber.value;
  if(intNumber[0] === '9'){
    spanNumDivisor.textContent = doubleDiv;
  }
  else{
    let totalDivisor = funciones.numDivisor(parseInt(intNumber));
    if(totalDivisor === 2){
      doubleDiv++
    }
  }
});