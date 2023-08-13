const removeFromArray = function(array) {
    const args = Array.prototype.slice.call(arguments, 1);
    return array.filter(x => !args.includes(x));
};

// Do not edit below this line
module.exports = removeFromArray;
