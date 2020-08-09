/*
 * @lc app=leetcode id=5 lang=javascript
 *
 * [5] Longest Palindromic Substring
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    let max = ''
    // 从每个点开始往外扩散（能扩散就阔，不能就下一个点
    for (let i = 0; i < s.length; i++) {
        // 考虑像'aba'和'abba'这种情况
        for (let j = 0; j < 2; j++) {
            let left = i
            let right = i + j
            // 确保left没有出界
            while (s[left] && s[left] === s[right]) {
                left--
                right++
            }
            // 因为左和右其实是回文字符串终点再过去一个，所以要-1
            if((right - left - 1) > max.length) {
                max = s.substring(left + 1, right)
            }
        }
    }
    return max
};
// @lc code=end

