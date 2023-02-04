const removeFromArray = function(array, ...elementsToDelete) {


    let filtered = array.filter((value) => {
        for(let i = 0; i < elementsToDelete.length;i++){
            if(value === elementsToDelete[i]){
                elementsToDelete.splice(i,1);
                return false;
            }
        }
        return true;
    })

    return filtered;

    //This also works
    for (let i = 0; i < array.length;i++){
        for(let x = 0; x < elementsToDelete.length; x++){
            if(array[i] === elementsToDelete[x]){
                elementsToDelete.splice(x,1);
                array.splice(i,1);
                x--;
                i--;
            }
        }
    }
    return array;
};
console.log(removeFromArray([1, 2, 3, 4], 3, 2));
// Do not edit below this line
module.exports = removeFromArray;
