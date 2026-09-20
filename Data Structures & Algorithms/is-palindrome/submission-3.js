class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
      let str = [];
      for(let i=0; i < s.length; i++) {
        if(/^[a-z0-9]$/i.test(s[i])) {
          str.push(s[i].toLowerCase());
        }
      } 
      let left = 0;
      let right = str.length - 1;
      let step = Math.floor(str.length / 2);
      
      let i = 0;
      while(i <= step) {
        if(str[left] !== str[right]) return false;
        left++;
        right--;
        i++;
      }
      return true;
    }
}