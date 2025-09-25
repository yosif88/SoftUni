function lockedProfile() {
    let button = Array.from(document.querySelectorAll('.profile button'));
    
    button.forEach(btn => {
        btn.addEventListener('click',onClick);
    })

    function onClick(e) {
        let parent = e.target.parentElement;
        let unlocked = parent.querySelector('input[value="unlock"]');
        if (unlocked.checked) {
            let divHiddenFields= parent.querySelector('div');
            divHiddenFields.style.display === 'block' ? 
            divHiddenFields.style.display='none': divHiddenFields.style.display='block';
            e.target.textContent === 'Hide it' ? 
            e.target.textContent ='Show more': e.target.textContent='Hide it'   
        
        }
    }
}