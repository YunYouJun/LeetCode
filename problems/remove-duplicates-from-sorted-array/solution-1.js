/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let oldNum = null
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === oldNum) {
      nums[i] = null
    } else {
      oldNum = nums[i]
    }
  }
  let order = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== null) {
      const temp = nums[i]
      nums[i] = null
      nums[order] = temp
      order++
    }
  }
  return order
}
