const repeatString = function(repeatedText,repeats) {
    if(repeats<0){
        return "ERROR";
    }
    let mergedText = "";

    for(let i = 0; i < repeats;i++){
        mergedText += repeatedText;
    }
    return mergedText;
};

// Do not edit below this line
module.exports = repeatString;
