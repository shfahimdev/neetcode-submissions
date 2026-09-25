class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[][]}
     */
    fourSum(nums, target) {
      nums.sort((a,b) => a - b);
      let res = [];
      let quad = [];

      function kSum(k, start, target) {
        if(k !== 2) {
          for(let i=start; i < nums.length - k + 1; i++) {
            if(i > start && nums[i] === nums[i - 1]) continue;
            quad.push(nums[i]);
            kSum(k-1, i + 1, target - nums[i]);
            quad.pop();
          }
          return;
        }
        let left = start;
        let right = nums.length - 1;
        while(left < right) {
          let sum = nums[left] + nums[right];
          if(sum < target) left++;
          else if(sum > target) right--;
          else {
            res.push([...quad , nums[left], nums[right] ]);
            left++;
            right--;
            while(left < right && nums[left] === nums[left - 1]) left++;
            while(left < right && nums[right] === nums[right + 1]) right--;
          }
        }
      }
      kSum(4, 0, target);
      return res;
    }
}

