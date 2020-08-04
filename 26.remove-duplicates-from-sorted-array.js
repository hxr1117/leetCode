/*
 * @lc app=leetcode id=26 lang=javascript
 *
 * [26] Remove Duplicates from Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if(nums.length < 2) {
        return nums.length;
    }
    let left = 0;
    let right = 1;
    while(right < nums.length) {
        if(nums[right] === nums[left]) {
            right++;
        } else {
            // 把右指针不同的赋值给左指针
            left++;
            nums[left] = nums[right];
            right++;
        }
    }
    return left + 1;
};
// @lc code=end

