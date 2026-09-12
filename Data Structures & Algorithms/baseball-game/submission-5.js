class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
      let records = [];
      for(let i=0; i<operations.length; i++) {
        if(!isNaN(Number(operations[i]))) {
          records.push(Number(operations[i]));
        } 
        if(operations[i] === "C") {
          records.pop();
        }
        if(operations[i] === "D") {
          records[records.length] = records[records.length - 1] * 2;
        } 
        if(operations[i] === "+") {
          records[records.length] = records[records.length - 1] + records[records.length - 2];
        }
      }
      let sum = 0;
      records.forEach(n => sum+=n);
      return sum;
    }
}
