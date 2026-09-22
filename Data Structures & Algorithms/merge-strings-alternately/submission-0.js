class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1, word2) {
      let result = [];
      
      if(word1.length === word2.length) {
        let i = 0;
        while(i < word1.length) {
          result.push(word1[i]);
          result.push(word2[i]);
          i++;
        } 
      } 

      if(word1.length < word2.length) {
        let i = 0;
        while(i < word1.length) {
          result.push(word1[i]);
          result.push(word2[i]);
          i++;
        }
        while(word2[i]) {
          result.push(word2[i]);
          i++;
        }
      }

      if(word1.length > word2.length) {
        let i = 0;
        while(i < word2.length) {
          result.push(word1[i]);
          result.push(word2[i]);
          i++;
        }
        while(word1[i]) {
          result.push(word1[i]);
          i++;
        }
      }
      return result.join("");
    }
}
