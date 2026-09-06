class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
      let stack = [];
      let closeToOpen = new Map;
      closeToOpen.set(")", "(");
      closeToOpen.set("}", "{");
      closeToOpen.set("]", "[");
    
      let i = 0;
      while(i < s.length) {
        if(closeToOpen.has(s[i])) {
          if(stack && stack[stack.length - 1] === closeToOpen.get(s[i])) {
            stack.pop();
          } else {
            return false;
          }
        } else {
          stack.push(s[i]);
        }
        i++;
      }
      return !(Boolean(stack[0]));
    }
}
