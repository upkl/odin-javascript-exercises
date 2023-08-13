const normalizeChar = function(char) {
    if (("a" <= char) && (char <= "z")) {
        return char;
    } else if (("A" <= char) && (char <= "Z")) {
        return char.toLowerCase();
    } else if (("0" <= char) && (char <= "9")) {
        return char;
    } else {
        return "";
    };
};

const sanitizeInput = function (string) {
    return string.split('')
                 .map(normalizeChar)
                 .filter(x => x);
};

const palindromes = function (word) {
    let wordAsArray = sanitizeInput(word);
    let word0 = wordAsArray.join("");
    let word1 = wordAsArray.reverse().join("");
    return word0 === word1;
};

// Do not edit below this line
module.exports = palindromes;
