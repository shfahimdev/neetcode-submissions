class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false;
        let hash = new Map();
        for(let i=0; i<s.length; i++) {
            if(hash.has(s[i])) {
            hash.set(s[i], hash.get(s[i]) + 1);
            } else {
            hash.set(s[i], 1);
            }
        }
        for(let i=0; i<t.length; i++) {
            if(hash.get(t[i]) === 0 || !hash.has(t[i])) return false;
            hash.set(t[i], hash.get(t[i]) - 1);
        }
        return true;

    }
}
