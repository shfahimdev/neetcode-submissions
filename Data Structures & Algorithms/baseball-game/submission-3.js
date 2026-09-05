class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
      console.log(operations);
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
        console.log(records);
      }
      let sum = 0;
      records.forEach(n => sum+=n);
      return sum;
    }
}
