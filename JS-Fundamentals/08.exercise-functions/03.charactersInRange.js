function charactersInRange(firstChar, secondChar) {
    let start = Math.min(firstChar.charCodeAt(), secondChar.charCodeAt());
    let end = Math.max(firstChar.charCodeAt(), secondChar.charCodeAt());

    let charArr = [];
    for (let i = start + 1; i < end; i++) {
        charArr.push(String.fromCharCode(i))
    }
    return charArr.join(' ')
}

console.log(charactersInRange('a', 'd'))