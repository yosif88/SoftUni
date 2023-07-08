function extractFile(path){
    let lastIndexSlash = path.lastIndexOf('\\');
    let lastIndexDot = path.lastIndexOf('.')

    let fileName = path.substring(lastIndexSlash + 1, lastIndexDot);
    let extension = path.substring(lastIndexDot + 1,);
    
    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${extension}`);
    

}

extractFile('C:\\Internal\\training-internal\\Template.pptx')