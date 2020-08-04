/*
 * @lc app=leetcode id=11 lang=javascript
 *
 * [11] Container With Most Water
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let left = 0;
    let right = height.length - 1;
    let result = 0;
    if (height.length < 2) return 0;
    while (left < right) {
        let c = Math.min(height[left], height[right]) * (right - left);
        if (c > result) result = c;
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    return result;
};
// @lc code=end

