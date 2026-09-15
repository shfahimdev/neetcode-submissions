class Solution {
    /**
     * @param {character[]} s
     * @return {void} Do not return anything, modify s in-place instead.
     */
    reverseString(s) {
        let left = 0;
        let right = s.length - 1;
        for(let i=0; i < Math.floor(s.length / 2); i++) {
            let temp = s[left];
            s[left] = s[right];
            s[right] = temp;
            left++;
            right--;
        }
        return s;
    }
}
