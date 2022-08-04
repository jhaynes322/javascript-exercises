
const repeatString = function (word, times) {
    let myString = "";
    if (times < 0) {
        return "ERROR";
    }
    for (let i = 0; i < times; i++) {
        myString += word;
    }
    return myString;
};
// Do not edit below this line
module.exports = repeatString;
