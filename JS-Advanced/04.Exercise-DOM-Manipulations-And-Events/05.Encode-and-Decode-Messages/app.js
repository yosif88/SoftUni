function encodeAndDecodeMessages() {
    let [textAreaMsg, textAreaReceivedMsg ] = document.querySelectorAll('textarea');
    let [encodeBtn, decodeBtn] = document.querySelectorAll('button');
    
    encodeBtn.addEventListener('click', encodeMsgHandler);
    decodeBtn.addEventListener('click', decodeMsgHandler);
    
   

    function encodeMsgHandler(){
        let encodeMsg = '';
        for (const word of textAreaMsg.value) {
            let ch = word.charCodeAt(0) + 1;
            encodeMsg += String.fromCharCode(ch);
            textAreaReceivedMsg.value = encodeMsg;     
        }
        textAreaMsg.value = '';
    }
    function decodeMsgHandler(){
        let decodeMsg = '';
        for (const symbol of textAreaReceivedMsg.value) {
            ch =symbol.charCodeAt(0) - 1;    
            decodeMsg += String.fromCharCode(ch);
            textAreaReceivedMsg.value = decodeMsg;
            
        }
    }
}


