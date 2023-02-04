const reverseString = function(string) {
    let splittedString = string.split('');
    for(let i = 0; i< Math.floor(splittedString.length/2);i++){
        [splittedString[i], splittedString[splittedString.length-1-i]] = [splittedString[splittedString.length-1-i], splittedString[i]];
    }
    return splittedString.join('');
};

// Do not edit below this line
module.exports = reverseString;
