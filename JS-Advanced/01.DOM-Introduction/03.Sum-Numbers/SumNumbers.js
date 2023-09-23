function calc() {
  
  let inputElementOne = document.getElementById('num1').value;
  let inputElementTwo = document.getElementById('num2').value;
  let inputSumElementOne = document.getElementById('sum');
  
  let res = Number(inputElementOne) + Number(inputElementTwo);
  inputSumElementOne.value = res;
  
  
}
