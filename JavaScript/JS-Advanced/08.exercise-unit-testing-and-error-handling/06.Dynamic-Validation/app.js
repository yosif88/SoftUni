function validate() {
    let inputEl = document.getElementById('email');
    let pattern = /[a-z]+@[a-z]+\.[a-z]+/g

    inputEl.addEventListener('change', onChange);

    function onChange(e){
        let value = inputEl.value;

        // pattern.test(value) ? 
        // inputEl.className = '':
        // inputEl.className ='error'
        if (!pattern.test(value)){
            inputEl.className = 'error';
        }else{
            inputEl.className ='';
        }

       
    }
}