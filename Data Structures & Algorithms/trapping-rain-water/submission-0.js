class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
      let leftMax = [];
      for(let i=0; i < height.length; i++) {
        if(i === 0) leftMax[i] = 0;
        else if(leftMax[i - 1] <= height[i - 1]) leftMax[i] = height[i - 1];
        else leftMax[i] = leftMax[i - 1];
      }

      height.reverse();

      let rightMax = [];
      for(let i=0; i < height.length; i++) {
        if(i === 0) rightMax[i] = 0;
        else if(rightMax[i - 1] <= height[i - 1]) rightMax[i] = height[i - 1];
        else rightMax[i] = rightMax[i - 1];
      }

      rightMax.reverse();
      height.reverse();

      let minLR = [];
      for(let i=0; i < height.length; i++) {
        minLR.push(Math.min(leftMax[i], rightMax[i]));
      }

      let answer_units = 0;
      for(let i=0; i < height.length; i++) {
        let val = minLR[i] - height[i];
        if(val > 0) answer_units += val;
      }

      return answer_units;
    }
}
