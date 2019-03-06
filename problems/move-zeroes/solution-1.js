/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let count = 0;
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] === 0) {
        count += 1;
      }
    }
    for (let i = 0; i < count; i++) {
      nums.splice(nums.indexOf(0), 1);
      nums.push(0);
    }
};