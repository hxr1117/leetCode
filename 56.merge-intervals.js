/*
 * @lc app=leetcode id=56 lang=javascript
 *
 * [56] Merge Intervals
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    if (!intervals.length) return intervals
    intervals.sort((a, b) => a[0] - b[0])
    var prev = intervals[0]
    var res = [prev]
    for (var curr of intervals) {
        if (curr[0] <= prev[1]) {
            prev[1] = Math.max(prev[1], curr[1])
        } else {
            res.push(curr)
            prev = curr
        }
    }
    return res
};
// @lc code=end

