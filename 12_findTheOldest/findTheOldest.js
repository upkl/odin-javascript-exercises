const findTheOldest = function(array) {
    let sortedArray = array.sort( (a, b) => -(age(a) - age(b)) );
    let result = sortedArray[0];
    return result;
};

const age = function(person) {
    if (person.yearOfDeath) {
        return person.yearOfDeath - person.yearOfBirth;
    } else {
        return new Date().getFullYear() - person.yearOfBirth;
    };
}

// Do not edit below this line
module.exports = findTheOldest;
