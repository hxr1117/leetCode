/*
 * @lc app=leetcode id=3 lang=javascript
 *
 * [3] Longest Substring Without Repeating Characters
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let max = 0;
    let queue = [];
    s = s.split("");
    for (let i = 0; i < s.length; i++) {
        if (queue.indexOf(s[i]) === -1) {
            queue.push(s[i]);
            max = max > queue.length ? max : queue.length;
        } else {
            queue = queue.slice(queue.indexOf(s[i])+1, queue.length);
            queue.push(s[i]);
            max = max > queue.length ? max : queue.length;
        }
    }
    console.log(queue);
    return max;
};
// @lc code=end

