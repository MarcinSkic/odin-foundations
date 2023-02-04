const fibonacci = function(a) {
    if(+a < 0) return "OOPS";

    let first = 1;
    let second = 1;
    for(let i = 2; i < +a;i++){
        let temp = first+second;
        first = second;
        second = temp;
    }
    return second;
};

// Do not edit below this line
module.exports = fibonacci;
