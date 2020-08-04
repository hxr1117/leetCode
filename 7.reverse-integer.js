/*
 * @lc app=leetcode id=7 lang=javascript
 *
 * [7] Reverse Integer
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let flag = 0;
    x = x.toString();
    if (x[0] === "-") {
        flag = 1;
        x = x.slice(1, x.length);
    }
    x = x.split("");
    let r = flag === 1 ? parseInt("-" + x.reverse().join("")) : parseInt(x.reverse().join(""));
    if (r < Math.pow(-2, 31) || r > (Math.pow(2, 31) - 1)) {
        r = 0;
    }
    return r;
};
// @lc code=end

