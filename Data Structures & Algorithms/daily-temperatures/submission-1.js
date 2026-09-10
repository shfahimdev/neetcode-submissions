class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
      let result = [];
      let stack = [];
      for(let i=0; i<temperatures.length; i++) result[i] = 0;
      temperatures.forEach((t,i) => {
        while(stack[0] && t > stack[stack.length - 1][0]) {
          let [stackT, stackInd] = stack.pop();
          result[stackInd] = i - stackInd;
        }
        stack.push([t, i]);
      })
      return result;
    }
}
