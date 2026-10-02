class Solution {
    /**
     * @param {number} target
     * @param {number[]} nums
     * @return {number}
     */
    minSubArrayLen(target, nums) {
      let ans = Infinity;
      let sum = 0;
      let left = 0;
      let right = 0;
      while (right < nums.length) {
        sum += nums[right];
        while (sum >= target) {
          ans = Math.min(right - left + 1, ans);
          sum -= nums[left];
          left++;
        }
        right++;
      }
      if(ans === Infinity) return 0;
      else return ans;
    }
}
