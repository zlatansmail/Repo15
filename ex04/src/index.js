const milili = [10, 25, 4];

function myArr(mili) {
    'use strict';
    mili = [];
    mili.push(25);
    mili.unshift(10);
    mili.unshift(4);


    return mili;
}

console.log(myArr(milili));

module.exports = myArr;