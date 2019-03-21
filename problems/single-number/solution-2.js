/** 循环记录次数
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  const dic = {}
  const length = nums.length
  for (let i = 0; i < length; i++) {
    const num = nums[i]
    if (num in dic) {
      dic[num] += 1
    } else {
      dic[num] = 1
    }
  }
  for (let i = 0; i < length; i++) {
    if (dic[nums[i]] === 1) {
      return nums[i]
    }
  }
}
