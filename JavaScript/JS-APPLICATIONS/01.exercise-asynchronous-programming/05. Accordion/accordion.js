async function solution() {
    
    const main = document.querySelector('#main');
    
    const url = 'http://localhost:3030/jsonstore/advanced/articles/list';
    const response = await fetch(url);
    const data = await response.json();
    
    data.forEach(el=>{
      
       const accordionDiv = createEl('div', '',['accordion']);
       const headDiv =  createEl('div', '',['head']);
       const span = createEl('span', el.title);
       const button = createEl('button','More',['button'],el._id);
       const extraDiv = createEl('div', '',['extra']);
       const p = createEl('p','');

    
        headDiv.appendChild(span);
        headDiv.appendChild(button);
        accordionDiv.appendChild(headDiv);
        extraDiv.appendChild(p);
        accordionDiv.appendChild(extraDiv);
        main.appendChild(accordionDiv);

        button.addEventListener('click', onClick);
        
        async function onClick(e){
            const id = e.target.id
            const res = await fetch( `http://localhost:3030/jsonstore/advanced/articles/details/${id}`)
            const result = await res.json();
           
           
                p.textContent = result.content;
            
           
            extraDiv.style.display === 'block' ? 
            extraDiv.style.display ='none': extraDiv.style.display ='block';
            
            e.target.textContent === 'More' ? e.target.textContent = 'Less':
            e.target.textContent = 'More';
            
        }


    });


    function createEl(type, content, attributes=[],id){
        const element  =  document.createElement(type);
        
        if(content){
            element.textContent = content;
        }
        
        if(attributes.length > 0){
            for (const attr of attributes) {
                element.className =attr;
            }
        }
        if (id){
            element.id = id; 
        }
        return element;
    }
    
}

solution()