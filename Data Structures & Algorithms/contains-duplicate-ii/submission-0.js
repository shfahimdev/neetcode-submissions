class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    containsNearbyDuplicate(nums, k) {
      let hash = new Map();
      for(let i=0; i < nums.length; i++) {
        if(hash.has(nums[i]) && Math.abs(hash.get(nums[i]) - i) <= k) return true;
        hash.set(nums[i], i);
      }
      return false;
    }
}