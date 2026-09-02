class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    majorityElement(nums) {
      let len = nums.length;
      let hash = new Map();

      nums.forEach(n => {
        if(hash.has(n)) {
          hash.set(n, hash.get(n) + 1);
        } else {
          hash.set(n, 1);
        }
      })

      let results = [];
      Array.from(hash.entries()).forEach(n => {
        if(n[1] > len / 3) results.push(n[0]);
      });
      return results;
    }
}