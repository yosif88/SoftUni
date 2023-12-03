async function getInfo() {
    const id = document.getElementById('stopId');
    const stopName = document.getElementById('stopName');
    let ul = document.getElementById('buses');


    const url = "http://localhost:3030/jsonstore/bus/businfo/" + id.value;

    try {
        const response = await fetch(url);
        const data = await response.json();
        stopName.textContent = data.name;
       
        id.value = ''
        ul.innerHTML = ''
        
        Object.entries(data.buses).forEach(el=>{
           const li = document.createElement("li");
           li.textContent = `Bus ${el[0]} arrives in ${el[1]} minutes`;
           ul.appendChild(li);
        })
     
       

    }catch{
        stopName.textContent = 'Error';
        ul.innerHTML = '';
    }
}