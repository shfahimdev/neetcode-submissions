class Solution {
    /**
     * @param {number[]} arr
     * @param {number} k
     * @param {number} x
     * @return {number[]}
     */
    findClosestElements(arr, k, x) {
      let delta = Infinity;
      let center;
      for(let i=0; i < arr.length; i++) {
        if(Math.abs(arr[i] - x) < delta) {
          delta = Math.abs(arr[i] - x);
          center = i;
        }
      }
      let result = [arr[center]];
      k--;
      let left = center - 1;
      let right = center + 1;

      while(k > 0) {
        let canLeft = left >= 0;
        let canRight = right < arr.length;

        if (!canLeft && !canRight) break;

        if(!canLeft) {
          result.push(arr[right]);
          right++;
        } else if(!canRight) {
          result.push(arr[left]);
          left--;
        } else {
          let deltaR = Math.abs(arr[right] - x);
          let deltaL = Math.abs(arr[left] - x);
          if(deltaL <= deltaR) {
            result.push(arr[left]);
            left--;
          } else {
            result.push(arr[right]);
            right++;
          }
        }
        k--;
      }
      result.sort((a,b) => a - b);
      return result;
    }
}
