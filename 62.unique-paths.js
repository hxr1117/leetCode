/*
 * @lc app=leetcode id=62 lang=javascript
 *
 * [62] Unique Paths
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
    let dp = new Array(m).fill(new Array(n).fill(1))
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            // 因为只能往右走和往下走，所以是i-1和j-1
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
        }
    }
    console.log(dp)
    return dp[m - 1][n - 1]
};
// @lc code=end

