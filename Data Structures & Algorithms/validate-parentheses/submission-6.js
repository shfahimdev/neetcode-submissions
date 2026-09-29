class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
      let stack = [];
      let openToClose = new Map();
      openToClose.set("(", ")");
      openToClose.set("{", "}");
      openToClose.set("[", "]");
      
      let i=0;
      while (i < s.length) {
        if(i === 0 && !openToClose.has(s[i])) return false;
        if(openToClose.has(stack[stack.length - 1]) && s[i] === openToClose.get(stack[stack.length - 1]) ) stack.pop(); 
        else stack.push(s[i]);
        i++;
      }
      return !Boolean(stack[0]);
    }
}