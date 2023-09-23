function extract(content) {
   
    let contentElements = document.getElementById(content)
    let pattern = /\(([^(]+)\)/g;
   
    let matches = contentElements.textContent.matchAll(pattern);
   
    let res = [];

    for (const match of matches) {
        res.push(match[1])
    }

    return res.join('; ');
}