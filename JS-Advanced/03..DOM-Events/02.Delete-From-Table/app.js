function deleteByEmail() {
    let emails = Array.from(document.querySelectorAll(' tbody tr td:nth-child(2n)'));
    let inputEl = document.querySelector('input[type="text"]');
    let result = document.querySelector('#result');

    let findEmail = emails.find(email => email.textContent == inputEl.value);

    if (findEmail) {
        findEmail.parentElement.remove();
        result.textContent = 'Deleted.'
        inputEl.value = '';
    }else{
        result.textContent = 'Not found.'
        inputEl.value ='';
    }


}