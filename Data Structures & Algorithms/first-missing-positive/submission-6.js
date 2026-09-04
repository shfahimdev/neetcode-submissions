
class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    firstMissingPositive(A) {
      let len = A.length;
      for(let i=0; i < len; i++) {
        if(A[i] <= 0) A[i] = len + 1;
      }
      for(let i=0; i < len; i++) {
        let val = Math.abs(A[i]);
        if(val >= 1 && val <= len) {
          A[val - 1] = -Math.abs(A[val-1]);
        }
      }
      for(let i=1; i <= len; i++) {
        if(A[i-1] > 0) return i;
      }
      return len + 1;
    }
}
