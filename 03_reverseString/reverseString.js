const reverseString = function (str) {
    let myString = str.split("");
    let revArray = myString.reverse();
    let newArray = revArray.join("");
    return newArray;
};

// Do not edit below this line
module.exports = reverseString;
