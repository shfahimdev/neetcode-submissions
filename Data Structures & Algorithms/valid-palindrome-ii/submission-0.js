class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    validPalindrome(s) {
      let str = [];
      for(let i=0; i < s.length; i++) {
        if(/^[a-z0-9]$/i.test(s[i])) {
          str.push(s[i].toLowerCase());
        }
      } 
      let left = 0;
      let right = str.length - 1;
      
      while(left < right) {
        if(str[left] !== str[right]) {
          let skipL = str.slice(left + 1, right + 1);
          let skipR = str.slice(left, right);
          
          if(skipL.join('') === [...skipL].reverse().join('') || 
             skipR.join('') === [...skipR].reverse().join('')) {
            return true;
          }
          return false;
        }
        left++;
        right--;
      }
      return true;
    }
}

