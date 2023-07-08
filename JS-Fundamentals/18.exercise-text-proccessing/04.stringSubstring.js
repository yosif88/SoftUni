function stringSubstring(searchWord, text) {
   let stringArr = text.split(' ');
   let isFound = false;

   for (const word of stringArr) {
        if (word.toLowerCase() === searchWord.toLowerCase()) {
                console.log(searchWord);
                isFound = true;
                break;
        }
   }
   if(!isFound){
    console.log(`${searchWord} not found!`);
   }

}

stringSubstring('javaScript',
'JavaScript is the best programming language')