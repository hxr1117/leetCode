/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map = new Map();
    for(let i = 0; i < nums.length; i++) {
        if (map.get(target-nums[i]) !== undefined) {
            let r = [map.get(target-nums[i]), i];
            return r;
        } else {
            map.set(nums[i], i);
        }
    }
};
// @lc code=end

