const palindromes = function (text) {
    text = removeSpecialCharacters(text);
    text = text.toLowerCase();
    for(let i = 0; i < text.length/2;i++){
        if(text.charAt(i) !== text.charAt(text.length-1-i)){
            return false;
        }
    }
    return true;
};

function removeSpecialCharacters(string){
    return string.replace(/[^a-zA-Z]/g,'');
}

// Do not edit below this line
module.exports = palindromes;
