function censoredWords(text, word) {

    let censored = text.replace(word, '*'.repeat(word.length));
    while (censored.includes(word)) {
        censored = censored.replace(word, '*'.repeat(word.length));

    }
    console.log(censored);
}

censoredWords('A small sentence with some words small', 'small')

