/*
 * @lc app=leetcode id=8 lang=javascript
 *
 * [8] String to Integer (atoi)
 */

// @lc code=start
/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function (str) {
    let a = parseInt(str);
    if (isNaN(a)) {
        return 0;
    }
    // let a = [];
    // str = str.trim().split("");
    // if (str.length === 0 || ((str[0] < "0" || str[0] > "9") && str[0] !== "-")) {
    //     return 0;
    // }
    // if (str[0] === "-") {
    //     a.push("-")
    //     str = str.slice(1, str.length)
    // }
    // for(let i of str) {
    //     if(i > "0" && i < "9") {
    //         a.push(i)
    //     } else {
    //         break
    //     }
    // }
    a = parseInt(a) > (Math.pow(2, 31) - 1) ? (Math.pow(2, 31) - 1) : parseInt(a)
    a = parseInt(a) < (Math.pow(-2, 31)) ? (Math.pow(-2, 31)) : parseInt(a)
    return a
};
// @lc code=end

