/*
 * @lc app=leetcode id=945 lang=javascript
 *
 * [945] Minimum Increment to Make Array Unique
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {number}
 */
var minIncrementForUnique = function (A) {
    // 排序之后只要每个数至少大于前一个数，那这个数组就没有一个元素重复
    A.sort((a, b) => a - b)
    let pre = A[0]
    let res = 0
    for (let i = 1; i < A.length; i++) {
        // 至少要比上一个大一
        let exp = pre + 1
        // 只要当前的比上一个大，那就不用变
        res += A[i] > exp ? 0 : exp - A[i]
        // 记录上一个数
        pre = Math.max(exp, A[i])
    }
    return res
};
// @lc code=end

