class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
      let left = 0;
      let right = heights.length - 1;
      let area = 0;
      while(left < right) {
        let current_area = (right - left) * Math.min(heights[left], heights[right]);
        if(current_area > area) area = current_area;

        if(heights[left] < heights[right]) {
          left++;
        } else {
          right--;
        }
      }
      return area;
    }
}