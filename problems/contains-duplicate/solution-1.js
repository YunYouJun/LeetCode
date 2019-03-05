/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  nums.sort();
  let oldNum;
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if(num === oldNum) 
      return true;
    else 
      oldNum = num;
  }
  return false;
};