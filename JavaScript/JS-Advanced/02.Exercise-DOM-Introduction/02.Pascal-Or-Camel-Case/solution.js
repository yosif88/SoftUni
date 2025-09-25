function solve() {
  
  let textElement = document.querySelector('#text');
  let convertedText = document.querySelector('#naming-convention');
  let result = document.querySelector('#result');
  
  let textAsArr = textElement.value.toLowerCase().split(' ');
  let string = '';
      
  if (convertedText.value === "Camel Case"){
      textAsArr.forEach((word, idx) => {
        if (idx === 0){
          string += word

        }else{
          string +=word[0].toUpperCase() + word.slice(1,);
        }
        
      })
  }else if (convertedText.value === 'Pascal Case'){
   
    textAsArr.forEach((word) => {
      string += word[0].toUpperCase() + word.slice(1);
   
    })

  }else{
    string = 'Error!';
  }
  result.textContent = string;
}