/*
 * @lc app=leetcode id=64 lang=javascript
 *
 * [64] Minimum Path Sum
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
    let m = grid.length
    let n = grid[0].length
    let arr = new Array(grid.length)
    for (let i = 0; i < m; i++) {
        arr[i] = new Array(n).fill(0)
    }
    arr[0][0] = grid[0][0]
    for (let i = 1; i < m; i++) {
        arr[i][0] = arr[i - 1][0] + grid[i][0]
    }
    for (let j = 1; j < n; j++) {
        arr[0][j] = arr[0][j - 1] + grid[0][j]
    }
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            arr[i][j] = Math.min(arr[i - 1][j], arr[i][j - 1]) + grid[i][j]
        }
    }
    // console.log(arr)
    return arr[m - 1][n - 1]
};
// @lc code=end

