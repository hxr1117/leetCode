/*
 * @lc app=leetcode id=118 lang=javascript
 *
 * [118] Pascal's Triangle
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    let res = new Array(numRows)
    for (let i = 0; i < numRows; i++) {
        res[i] = new Array(i + 1)
        for (let j = 0; j < res[i].length; j++) {
            if (i === 0 || j === 0 || j === res[i].length - 1) {
                res[i][j] = 1
            } else {
                res[i][j] = res[i - 1][j - 1] + res[i - 1][j]
            }
        }
    }
    return res
};
// @lc code=end

