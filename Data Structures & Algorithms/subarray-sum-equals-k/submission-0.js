class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums, k) {
      let count = 0;
      let current_sum = 0;
      let seen = new Map();
      seen.set(0, 1);
      
      for(const n of nums) {
        current_sum += n;
        let target = current_sum - k;
        if(seen.has(target)) {
          count += seen.get(target);
        }
        
        if(seen.has(current_sum)) {
          seen.set(current_sum, seen.get(current_sum) + 1);
        } else {
          seen.set(current_sum, 1);
        }
      } 
      
      return count;
    }
}
