function extractText() {
    // Fist option with quearySelector All 
    // let liElement = document.querySelectorAll('#items li');
    // let areaElement = document.getElementById('result');
    // let res = []
    // for (const element of liElement) {
    //     res.push(element.textContent)
    // }
    // areaElement.value += res.join('\n');

    // second option with getElementById:

    let itemsElement = document.getElementById('items');
    let areaTextElement = document.getElementById('result');

    areaTextElement.textContent += itemsElement.textContent;

}