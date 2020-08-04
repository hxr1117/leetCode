/*
 * @lc app=leetcode id=16 lang=javascript
 *
 * [16] 3Sum Closest
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    let closest = Infinity;
    nums.sort((a, b) => a - b);
    for(let i = 0; i < nums.length - 2; i++) {
        let left = i + 1;
        let right = nums.length - 1;
        while(left < right) {
            let locSum = nums[i] + nums[left] + nums[right];
            if(Math.abs(locSum - target) < Math.abs(closest - target)) {
                closest = locSum;
            }
            if(locSum > target) {
                right--;
            } else {
                left++;
            }
        }
    } 
    return closest;
};
// @lc code=end

