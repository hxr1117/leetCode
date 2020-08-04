/*
 * @lc app=leetcode id=14 lang=javascript
 *
 * [14] Longest Common Prefix
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    'use strict';
    if (strs === undefined || strs.length === 0) return ''
    return strs.reduce((pre, next) => {
        let i = 0;
        while(pre[i] && next[i] && pre[i] === next[i]) {
            i++;
        }
        return pre.slice(0, i);
    });
};
// @lc code=end

