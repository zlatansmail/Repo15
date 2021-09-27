function printManyTimes(str) {
    "use strict";

    const sentence = str + " is cool!";
    for (let i = 0; i < str.length; i += 2) {
        console.log(sentence);
    }

    return sentence;
}

printManyTimes("Arena");
module.exports = printManyTimes;