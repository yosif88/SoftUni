function validate() {
    let form = document.getElementById('registerForm');
    let companyInfo = document.getElementById('companyInfo');
    const companyCheck = document.getElementById('company')
    
    companyCheck.addEventListener('change',()=>{
        if(companyCheck.checked){
            companyInfo.style.display ='block';
        }else{
            companyInfo.style.display = 'none';
        }
    })



    form.addEventListener('submit', submitBtnClick);


    function submitBtnClick(e) {
        e.preventDefault();
        const usernameInput = document.getElementById('username');
        const emailInput = document.getElementById('email');
        const passwordInput = document.getElementById('password');
        const rePasswordInput = document.getElementById('confirm-password')
        const companyNumberInput = document.getElementById('companyNumber')
        
        const validField = document.getElementById('valid');

        let userNamePattern = /^[A-Za-z1-9]+$/;
        let passwordPattern = /^[\w]+$/
        //let emailPattern = /^[a-zA-Z1-9]+@[a-zA-Z1-9]+\.[a-zA-Z1-9]+/g;
        let emailPattern = /.*@.*\..*/;

        let usernameIsValid = false;
        let passwordIsValid = false;
        let rePasswordIsValid = false;
        let emailIsValid = false;
        let companyNumbersIsValid = false;

        if (userNamePattern.test(usernameInput.value) 
        && usernameInput.value.length >= 3 && usernameInput.value.length <= 20) {
            usernameIsValid = true;
        }

        if (passwordPattern.test(passwordInput.value) &&
            passwordInput.value === rePasswordInput.value &&
             passwordInput.value.length >=5 &&
             passwordInput.value.length <= 15 ) {
            passwordIsValid = true;
            rePasswordIsValid = true;
        }

        if (emailPattern.test(emailInput.value)) {
            emailIsValid = true;

        }

        if (companyCheck.checked) {
            if (companyNumberInput.value >= 1000 && companyNumberInput.value <= 9999) {
                companyNumbersIsValid = true;
            } 
        }else {
            companyNumbersIsValid = true;
        }

        if (usernameIsValid &&
            passwordIsValid &&
            rePasswordIsValid &&
            emailIsValid &&
            companyNumbersIsValid) {
            
            validField.style.display = 'block';

        }

        usernameIsValid === false ?
            usernameInput.style.borderColor = 'red':
            usernameInput.style.borderColor = '';
            
        

        emailIsValid === false ?
            emailInput.style.borderColor = 'red' :
            emailInput.style.borderColor = '';

        passwordIsValid === false ?
            passwordInput.style.borderColor = 'red' :
            passwordInput.style.borderColor = '';

        rePasswordIsValid === false ?
            rePasswordInput.style.borderColor = 'red' :
            rePasswordInput.style.borderColor = '';

        companyNumbersIsValid === false ?
        companyNumberInput.style.borderColor = 'red' :
        companyNumberInput.style.borderColor = '';



    }



}
