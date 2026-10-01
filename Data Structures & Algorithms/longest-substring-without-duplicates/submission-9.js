class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
    let charSet = new Set();
    let result = 0;
    let left = 0;
    for(let right = 0; right < s.length; right++) {
        while(charSet.has(s[right])) {
            charSet.delete(s[left]);
            left++;
        }
        charSet.add(s[right]);
        result = Math.max(result, right - left + 1);
    }
    return result;
    }
}
