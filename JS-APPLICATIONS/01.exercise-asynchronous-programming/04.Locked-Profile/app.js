function lockedProfile() {

    const main = document.querySelector('#main');
    const url = `http://localhost:3030/jsonstore/advanced/profiles`;

    let index = 0;
    main.innerHTML = ''
    fetch(url)
        .then(res => res.json())

        .then(data => {
            
            for (const key in data) {
               
                let profileDiv = document.createElement('div');
                profileDiv.className = 'profile'
                index++;


                profileDiv.innerHTML = `<img src="./iconProfile2.png" class="userIcon" />
                <label>Lock</label>
                <input type="radio" name="user${index}Locked" value="lock" checked>
            <label>Unlock</label>
            <input type="radio" name="user${index}Locked" value="unlock"><br>
            <hr>
            <label>Username</label>
            <input type="text" name="user${index}Username" value="${data[key].username}" disabled readonly />
            <div class="user1Username">
            <hr>
            <label>Email:</label>
            <input type="email" name="user${index}Email" value="${data[key].email}" disabled readonly />
            <label>Age:</label>
            <input type="text" name="user${index}Age" value="${data[key].age}" disabled readonly />
        </div>
            <button>Show more</button>
            `

                main.appendChild(profileDiv)
            }
            
            Array.from(document.querySelectorAll('button')).forEach(btn => {
                btn.addEventListener('click', onClick)
            });
            function onClick(e) {
                const hiddenInfoDiv = e.target.previousElementSibling;
                const unlocked = e.target.parentElement.querySelector('input[type="radio"]:checked');
    
                if (unlocked.value !== 'unlock') {
                    return;
                }
                hiddenInfoDiv.style.display = hiddenInfoDiv.style.display === 'inline-block' ? 'none': 'inline-block';
                e.target.textContent = e.target.textContent === 'Show more'? 'Hide it':'Show more'
            }
    
        });
     
}     
