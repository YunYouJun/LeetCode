/** hash
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let dic = {}
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] in dic) {
      return [dic[nums[i]], i]
    }
    dic[target - nums[i]] = i
  }
  return []
};