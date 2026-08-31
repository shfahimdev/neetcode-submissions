class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let result = "";
        for(let i=0; i<strs.length; i++) {
            let len = strs[i].length;
            result = result + len + "<" + strs[i];
        }
        return result;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let result = [];
        let i = 0;
        while(i < str.length) {
            let j = i;
            while(str[j] !== "<") {
                j++;
            }
            let len = Number(str.slice(i,j));
            result.push(str.slice(j+1, j+1+len));
            i = j+1+len;
        }
        return result;
    }
}
