function validate() {
    let pattern = /[a-z]+@[a-z]+\.[a-z]+/g;
    let input = document.getElementById('email');    

    input.addEventListener('change',focusHandler);
    

    function focusHandler(e){
        if (pattern.test(input.value)){
            e.target.className = '';
        }else {
            e.target.className = 'error'
        }
        
    }
    
}