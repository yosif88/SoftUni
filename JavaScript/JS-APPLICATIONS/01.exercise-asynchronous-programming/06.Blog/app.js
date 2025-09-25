async function attachEvents() {
    document.getElementById('btnLoadPosts').addEventListener('click', loadPosts);
    document.getElementById('btnViewPost').addEventListener('click', viewPosts);
    const posts = [];
    async function loadPosts(e) {
        try {
            const url = `http://localhost:3030/jsonstore/blog/posts`;
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error();
            }

            const data = await response.json();
            const selectEL = document.getElementById('posts');
            selectEL.innerHTML = '';

            Object.entries(data).forEach(([key, value]) => {
                const optionEl = document.createElement('option');
                optionEl.value = key;
                optionEl.textContent = value.title;
                selectEL.appendChild(optionEl);
                posts.push({ title: value.title, body: value.body })

            })
        } catch (e) {
            console.log(e);
        }


    }
    async function viewPosts(e) {
        try {
            const selectElement = document.getElementById('posts');
            const url = 'http://localhost:3030/jsonstore/blog/comments';

            const response = await fetch(url);
            if (!response.ok) {
                throw new Error();
            }

            const data = await response.json();
            const comments = Object.values(data).filter(el => el.postId === selectElement.value);

            document.getElementById('post-title').textContent = selectElement.selectedOptions[0].textContent;
            const po = posts.filter(p => p.title == selectElement.selectedOptions[0].textContent);

            document.getElementById('post-body').innerHTML = `${po[0].body}`;
            document.getElementById('post-comments').innerHTML = '';

            comments.forEach(comment => {
                const li = document.createElement('li');
                li.textContent = comment.text;
                document.getElementById('post-comments').appendChild(li);
            })


        } catch (e) {
            console.log(e);
        }
    }
}

attachEvents();