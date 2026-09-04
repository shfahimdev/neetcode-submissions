class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
      let len = nums.length;
      for(let i=0; i < len; i++) {
        nums[len + i] = nums[i];
      }
      return nums;
    }
}
