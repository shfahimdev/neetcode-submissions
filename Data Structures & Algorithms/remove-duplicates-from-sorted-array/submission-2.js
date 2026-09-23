class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
      let left = 0;
      let right = 1;
      while(right < nums.length) {
        if(nums[left] !== nums[right]) {
          nums[left + 1] = nums[right];
          left++;
        }
        right++;
      }
      let i = 0;
      while(i < nums.length) {
        if(nums[i-1] >= nums[i]) {
          return i;
        }
        i++;
      }
      return i;
    }
}

