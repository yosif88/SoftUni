function focused() {
    let inputElement = Array.from(document.querySelectorAll('div div input'));

    inputElement.forEach(el =>{
        el.addEventListener('focus',focusHandler);
        el.addEventListener('blur', blurHandler);
    })

    function focusHandler(e){
        e.currentTarget.parentNode.className = 'focused';
    }
    function blurHandler(e){
        e.currentTarget.parentNode.className = '';
    }
}