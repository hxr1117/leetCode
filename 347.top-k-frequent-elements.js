/*
 * @lc app=leetcode id=347 lang=javascript
 *
 * [347] Top K Frequent Elements
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    let map = {}
    for (let i of nums) {
        if (map[i] === undefined) {
            map[i] = 1
        } else {
            map[i]++
        }
    }
    keysSorted = Object.keys(map).sort(function (a, b) { return map[b] - map[a] })
    return keysSorted.slice(0, k)
};
// @lc code=end

