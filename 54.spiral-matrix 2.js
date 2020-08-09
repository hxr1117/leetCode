/*
 * @lc app=leetcode id=54 lang=javascript
 *
 * [54] Spiral Matrix
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    if(matrix === null || matrix.length === 0) return []
    let res = []
    let n = matrix.length;
    let m = matrix[0].length;
    let left = 0; let right = m - 1;
    let up = 0; let down = n - 1;
    while(res.length < n * m) {
        for(let i = left; i <= right && res.length < n * m; i++) {
            res.push(matrix[up][i])
        }
        for(let j = up + 1; j <= down -1 && res.length < n * m; j++) {
            res.push(matrix[j][right])
        }
        for(let i = right; i >= left && res.length < n * m; i--) {
            res.push(matrix[down][i])
        }
        for(let j = down - 1; j >= up + 1 && res.length < n * m; j--) {
            res.push(matrix[j][left])
        }
        left += 1
        right -= 1
        up += 1
        down -= 1
    }
    return res
};
// @lc code=end

