function calc() {
  
  let firstElement = document.getElementById('num1').value;
  let secondElement = document.getElementById('num2').value;
  let inputSumElement = document.getElementById('sum');
  
  let res = Number(firstElement) + Number(secondElement);
  inputSumElement.value = res;
  
  
}
