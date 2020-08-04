/*
 * @lc app=leetcode id=6 lang=javascript
 *
 * [6] ZigZag Conversion
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
    let str = new Array(numRows).fill([])
    let i = 0;
    s = s.split("")
    while (i < s.length) {
        for (let idx = 0; idx < numRows && i < s.length; idx++) {
            str[idx].push(s[i])
            i++
        }
        for (let idx = numRows - 2; idx > 0 && i < s.length; idx--) {
            str[idx].push(s[i])
            i++
        }
        console.log(str);
    }
    for (let i = 1; i < numRows; i++) {
        str[0].push(str[i])
    }
    return str[0].join("")
};
// @lc code=end

