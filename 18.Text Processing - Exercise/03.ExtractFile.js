function extractFiles(str){
    let address = str.split("\\");
    let lastEl = address.pop();
    let index = lastEl.lastIndexOf('.');
    let file = lastEl.substring(0, index);
    let extension = lastEl.substring(index + 1, lastEl.length);
    console.log(`File name: ${file}`);
    console.log(`File extension: ${extension}`);
}

extractFiles("C:\\Internal\\training-internal\\Template.first.pptx");