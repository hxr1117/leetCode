/*
 * @lc app=leetcode id=73 lang=javascript
 *
 * [73] Set Matrix Zeroes
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    let isCol = false
    let R = matrix.length
    let C = matrix[0].length
    for(let i = 0; i < R; i++) {
        // 记录这列头是否本来就是0，不是标记为0
        if(matrix[i][0] === 0) {
            isCol = true
        }
        // 从第二列开始记录
        for(let j = 1; j < C; j++) {
            if(matrix[i][j] === 0) {
                matrix[i][0] = 0
                matrix[0][j] = 0
            }
        }
    }
    // 给标记了的行列置零
    for(let i = 1; i < R; i++) {
        for(let j = 1; j < C; j++) {
            if(matrix[i][0] === 0 || matrix[0][j] === 0) {
                matrix[i][j] = 0
            }
        }
    }
    // 如果第一行第一个就是0
    if(matrix[0][0] === 0) {
        for(let j = 0; j < C; j++) {
            matrix[0][j] = 0
        }
    }
    // 如果某列的头为零
    if(isCol) {
        for(let i = 0; i < R; i++) {
            matrix[i][0] = 0
        }
    }
};
// @lc code=end

