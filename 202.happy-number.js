/*
 * @lc app=leetcode id=202 lang=javascript
 *
 * [202] Happy Number
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let seen = {};
    while(n !== 1 && !seen[n]) {
        seen[n] = true;
        n = squares(n);
    }
    return n === 1;
};
const squares = function(str) {
    return str.toString().split("").reduce((sum, num) => {
        return sum + Math.pow(num, 2);
    }, 0);
}
// @lc code=end

