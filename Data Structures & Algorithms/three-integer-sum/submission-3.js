class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
      let results = [];
      nums.sort((a,b) => a - b);

      for(let i = 0; i < nums.length; i++) {
        if(i > 0 && nums[i] === nums[i-1]) {
          continue;
        }
        let target = -1 * nums[i];
        let left = i + 1;
        let right = nums.length - 1;

        while(left < right) {
          let sum = nums[left] + nums[right];
          if(sum > target) right--;
          else if(sum < target) left++;
          else {
            results.push( [nums[i], nums[left], nums[right]] );
            left++;
            right--;
            while (left < right && nums[left] === nums[left - 1]) left++;
            while (left < right && nums[right] === nums[right + 1]) right--;
          }
        }
      }
      return results;
    }
}
