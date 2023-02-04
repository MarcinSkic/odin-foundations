const findTheOldest = function(people) {
    people = people.sort((a,b)=> {
        if(b.yearOfDeath == undefined){
            b.yearOfDeath = (new Date).getFullYear();
        } else if(a.yearOfDeath == undefined){
            a.yearOfDeath = (new Date).getFullYear();
        }
        return (b.yearOfDeath-b.yearOfBirth) - (a.yearOfDeath-a.yearOfBirth);
    });
    return people[0];
};



// Do not edit below this line
module.exports = findTheOldest;
