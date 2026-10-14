class bigDihh {
  constructor() {
    this.items = {};
    this.frontCount = 0;
    this.rearCount = 0;
  }

  addFront(value) {
    if (this.isEmpty()) {
      this.addBack(value);
    } else {
      this.frontCount--;
      this.items[this.frontCount] = value;
    }
  }

  addBack(value) {
    this.items[this.rearCount] = value;
    this.rearCount++;
  }

  removeFront() {
    if (this.isEmpty()) {
      return undefined;
    }
    const value = this.items[this.frontCount];
    delete this.items[this.frontCount];
    this.frontCount++;
    if (this.isEmpty()) {
      this.clear();
    }
    return value;
  }

  removeBack() {
    if (this.isEmpty()) {
      return undefined;
    }
    this.rearCount--;
    const value = this.items[this.rearCount];
    delete this.items[this.rearCount];
    if (this.isEmpty()) {
      this.clear();
    }
    return value;
  }

  peekFront() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.frontCount];
  }

  peekBack() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.rearCount - 1];
  }

  isEmpty() {
    return this.size() === 0;
  }

  size() {
    return this.rearCount - this.frontCount;
  }

  clear() {
    this.items = {};
    this.frontCount = 0;
    this.rearCount = 0;
  }
}


class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
      let output = [];
      let left = 0;
      let right = 0;
      let q = new bigDihh();
      
      while(right < nums.length) {
        while(!q.isEmpty() && nums[q.peekBack()] < nums[right]) q.removeBack();
        q.addBack(right);
        if(left > q.peekFront()) q.removeFront();
        if(right + 1 >= k) {
          output.push(nums[q.peekFront()]);
          left++;
        }
        right++;
      }
      return output;
    }
}
