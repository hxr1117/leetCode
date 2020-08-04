/*
 * @lc app=leetcode id=42 lang=javascript
 *
 * [42] Trapping Rain Water
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    var ans = 0;
    let left_max = new Array(height.length).fill(-1);
    let right_max = new Array(height.length).fill(-1);
    left_max[0] = height[0];
    console.log(left_max);
    for (let i = 1; i < height.length; i++) {
        left_max[i] = Math.max(height[i], left_max[i - 1]);
    }
    right_max[height.length - 1] = left_max[height.length - 1];
    for (let i = height.length - 2; i >= 0; i--) {
        right_max = Math.max(right_max[i - 1], height[i])
    }
    for (let i = 1; i < height.length - 1; i++) {
        ans += (Math.min(left_max[i], right_max[i]) - height[i]);
    }
    return ans;
};
// @lc code=end

