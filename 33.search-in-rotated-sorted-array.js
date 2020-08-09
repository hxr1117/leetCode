/*
 * @lc app=leetcode id=33 lang=javascript
 *
 * [33] Search in Rotated Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let left = 0
    let right = nums.length - 1
    while (left < right) {
        let mid = Math.floor((right + left) / 2)
        if (nums[mid] > nums[right]) right = mid + 1
        else left = mid
    }
    let head = left
    left = 0
    right - nums.length - 1
    while(left <= right) {
        let realMid = 
    }
};
// @lc code=end

