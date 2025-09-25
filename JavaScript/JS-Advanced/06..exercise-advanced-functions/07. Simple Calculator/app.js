function calculator() {
    let inputOne;
    let inputTwo;
    let resultInput;

    return {
        init:(selector1, selector2, resultSelector) =>{
            inputOne = document.querySelector(selector1);
            inputTwo = document.querySelector(selector2);
            resultInput = document.querySelector(resultSelector);
        },
        add:()=>{
            resultInput.value = Number(inputOne.value) + Number(inputTwo.value);
        
        },

        subtract:() =>{
            resultInput.value = Number(inputOne.value) - Number(inputTwo.value);
    
        }

    }
}
const calculate = calculator ();
calculate.init ('#num1', '#num2', '#result');



