function getArticleGenerator(articles) {
    let divEl = document.getElementById('content');

    function showNext(){

        if (articles.length > 0){
            
            let text = articles.shift();
            
            let article = document.createElement('article');
            let p = document.createElement('p');
            
            p.innerText = text;
            article.appendChild(p); 
            divEl.appendChild(article);
        }

    }
    return showNext;
}
