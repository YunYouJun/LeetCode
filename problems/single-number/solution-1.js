/** 先排序
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  nums.sort()
  let curNum
  let curRecord = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === curNum) {
      curNum = null
      curRecord -= 1
    } else {
      if (curRecord === 0) {
        curNum = nums[i]
        curRecord += 1
      } else {
        return curNum
      }
    }
  }
  return curNum
}
