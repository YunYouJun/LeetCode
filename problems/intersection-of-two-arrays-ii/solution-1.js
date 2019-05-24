/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
  let ans = []
  let dic = {}
  for (const num1 of nums1) {
    if (dic[num1]) {
      dic[num1] += 1
    } else {
      dic[num1] = 1
    }
  }
  for (const num2 of nums2) {
    if (dic[num2]) {
      dic[num2] -= 1
      ans.push(num2)
      if (dic[num2] === 0) {
        delete dic[num2]
      }
    }
  }
  return ans
}