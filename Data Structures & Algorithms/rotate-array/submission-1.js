class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    rotate(nums, k) {
      k = k % nums.length;
      let left = 0;
      let right = nums.length - 1;
      while(left < right) {
        let temp = nums[left];
        nums[left] = nums[right];
        nums[right] = temp;
        right--;
        left++;
      }
      left = 0;
      right = k - 1;
      while(left < right) {
        let temp = nums[left];
        nums[left] = nums[right];
        nums[right] = temp;
        right--;
        left++;
      }
      left = k;
      right = nums.length - 1;
      while(left < right) {
        let temp = nums[left];
        nums[left] = nums[right];
        nums[right] = temp;
        right--;
        left++;
      }
      return nums;
    }
}
