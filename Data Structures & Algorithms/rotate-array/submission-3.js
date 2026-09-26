class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    rotate(nums, k) {
      k = k % nums.length;
      
      function reverse(left, right) {
        while(left < right) {
          let temp = nums[left];
          nums[left] = nums[right];
          nums[right] = temp;
          right--;
          left++;
        }
      }
      
      reverse(0, nums.length - 1);
      reverse(k, nums.length - 1);
      reverse(0, k - 1);

      return nums;
    }
}
