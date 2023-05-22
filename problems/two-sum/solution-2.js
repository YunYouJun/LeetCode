/** hash
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
  const dic = {}
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] in dic)
      return [dic[nums[i]], i]

    dic[target - nums[i]] = i
  }
  return []
}
