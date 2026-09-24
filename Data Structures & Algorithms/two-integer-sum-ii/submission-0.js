class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
      let left = 1;
      let right = numbers.length;
      while(left < right) {
        if(numbers[left - 1] + numbers[right - 1] > target) {
          right--;
        } 
        if(numbers[left - 1] + numbers[right - 1] < target){
          left++;
        }
        if(numbers[left - 1] + numbers[right - 1] === target){
          return [left, right];
        }

      }
    }
}