/*
 * @lc app=leetcode id=15 lang=javascript
 *
 * [15] 3Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    let rs = [];
    nums.sort((a, b) => a - b);
    if (nums[0] > 0 || nums.length < 3) { return rs; }
    for (let i = 0; i < nums.length - 2; i++) {
        // nums[i]是当前最小的数，如果大于0说明之和都大于0
        if (nums[i] > 0) { return rs; }
        // 如果当前的数和上一个相等，说明这三个数的数组一致，无法加入结果数组
        if (nums[i] === nums[i - 1]) { continue; }
        let left = i + 1;
        let right = nums.length - 1;
        while (left < right) {
            let sum = nums[i] + nums[left] + nums[right];
            if (sum === 0) {
                let arr = [nums[i], nums[left], nums[right]];
                rs.push(arr);
                // left相同也不能加入结果
                while (nums[left] === nums[left + 1] && left < right) {
                    left++;
                }
                // right同样
                while (nums[right] === nums[right - 1] && left < right) {
                    right--;
                }
                left++;
                right--;
            } else if (sum > 0) {
                right--;
            } else {
                left++;
            }
        }
    }
    return rs;
};
// @lc code=end

