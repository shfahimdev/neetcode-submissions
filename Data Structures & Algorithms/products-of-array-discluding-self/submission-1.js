class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let prefixes_arr = [];
  let prefix = 1;
  let i = 0;
  while (i < nums.length) {
    if(i === 0) {
      prefixes_arr.push(1);
      i++;
      continue;
    }
    prefix *= nums[i-1];
    prefixes_arr.push(prefix);
    i++;
  }

  let postfixes_arr = [];
  let postfix = 1;
  for(let i = nums.length - 1; i >= 0; i--) {
    if(i === nums.length - 1) {
      postfixes_arr[i] = 1;
      continue;
    }
    postfix *= nums[i+1];
    postfixes_arr[i] = postfix;
  }

  let result = [];
  for(let i = 0; i < nums.length; i++) {
    result[i] = prefixes_arr[i] * postfixes_arr[i];
  }

  return result;
    }
}
