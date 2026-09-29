class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
      let stack = [];
      operations.forEach(n => {
        let len = stack.length;
        if(!isNaN(Number(n))) stack.push(Number(n));
        if(n === "+") stack.push( stack[len - 1] + stack[len - 2] );
        if(n === "D") stack.push( stack[len - 1] * 2 );
        if(n === "C") stack.pop();
      })
      let result = 0;
      stack.forEach(n => result += Number(n));
      return result;
    }
}