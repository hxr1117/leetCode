/*
 * @lc app=leetcode id=70 lang=javascript
 *
 * [70] Climbing Stairs
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    dp = new Array(n+1).fill(0)
    dp[0] = 0
    dp[1] = 1
    dp[2] = 2
    // dp[i]表示到第i节阶梯可能的情况
    for (let i = 3; i <= n; i++) {
        // 从i-1上来就是一次一步，从i-2上来就是一次两步
        dp[i] = dp[i - 1] + dp[i - 2]
    }
    return dp[n]
};
// @lc code=end

