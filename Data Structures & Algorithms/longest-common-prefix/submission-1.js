class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
      let result = [];

      for(let i = 0; i < strs[0].length; i++) {
        let current_char = strs[0].split("")[i];
        for(let j = 0; j < strs.length; j++) {
          if(strs[j].split("")[i] !== current_char) {
            return result.join("");
          }
        }
        result.push(current_char);
      }

      return result.join("");
    }
}