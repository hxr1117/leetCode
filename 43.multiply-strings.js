/*
 * @lc app=leetcode id=43 lang=javascript
 *
 * [43] Multiply Strings
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
const getNum = function (num) {
    let n = 0;
    let c = 1;
    for (let i = num.split("").length - 1; i >= 0; i--) {
        n += parseInt(num[i]) * c;
        c *= 10;
    }
    console.log(n);
    return n;
}
var multiply = function (num1, num2) {
    num1 = num1.split("");
    num2 = num2.split("");
    
    return (getNum(num1) * getNum(num2)).toString();
};
// @lc code=end

