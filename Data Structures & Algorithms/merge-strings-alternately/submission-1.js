class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1, word2) {
      let result = [];
      let i = 0;
      let j = 0;

      while(i < word1.length && j < word2.length) {
        result.push(word1[i]);
        result.push(word2[i]);
        i++;
        j++;
      }

      if(word1[i]) {
        result.push(word1.slice(i,word1.length));
      } else {
        result.push(word2.slice(i,word2.length));
      }

      return result.join("");
    }
}