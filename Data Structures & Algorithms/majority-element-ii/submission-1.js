class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    majorityElement(nums) {
      let hash = new Map();

      let i = 0;
      while( i < nums.length) {
        if(hash.has(nums[i])) {
          hash.set(nums[i], hash.get(nums[i]) + 1);
        } else {
          hash.set(nums[i], 1);
        }

        if(hash.size === 3) {
          Array.from(hash.keys()).forEach(n => {
            hash.set(n, hash.get(n) - 1);
            if(hash.get(n) === 0) hash.delete(n);
          })
        }

        i++;
      }

      let candidates = Array.from(hash.keys());
      let results = [];

      for(let i = 0; i < candidates.length; i++) {
        let counter = 0;
        nums.forEach(n => {
          if(candidates[i] === n) counter++;
        })
        if(counter > nums.length / 3) {
          results.push(candidates[i]);
        }
      }

      return results;
    }
}

