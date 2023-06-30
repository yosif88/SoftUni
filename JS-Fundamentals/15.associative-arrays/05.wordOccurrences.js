function wordOccurrences(data) {
    let words = new Map();

    for (const text of data) {

        if (words.has(text)) {

            let counter = words.get(text);
            counter++;

            words.set(text, counter)

        } else {
            words.set(text, 1)
        }
    }

    let sortedMap = Array.from(words.entries()).sort((kvpA, kvpB) => kvpB[1] - kvpA[1]);
   
    for (const [key, value] of sortedMap) {
        console.log(`${key} -> ${value} times`);
    }

}

wordOccurrences(["Here",
    "is",
    "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third",
    "sentence"])