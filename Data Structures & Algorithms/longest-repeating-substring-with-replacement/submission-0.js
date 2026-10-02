class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
      let hash = new Map();
      let result = 0;
      let left = 0;
      for(let right=0; right < s.length; right++) {
        if(!hash.has(s[right])) hash.set(s[right], 1);
        else hash.set(s[right], hash.get(s[right]) + 1);
        let current_max = 0;
        for(const count of hash.values()) {
          current_max = Math.max(count, current_max);
        }
        while ((right - left + 1) - current_max > k) {
          hash.set(s[left], hash.get(s[left]) - 1);
          left++;
        }
        result = Math.max(result, right - left + 1);
      } 
      return result;
    }
}
