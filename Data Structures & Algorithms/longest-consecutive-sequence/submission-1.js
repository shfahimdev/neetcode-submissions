class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
      let hash = new Set(nums);
      let starts = [];
      Array.from(hash).forEach(n => {
        if(!hash.has(n - 1)) {
          starts.push(n);
        }
      })
      console.log(starts);

      let counter = 0;
      let i = 0;

      while(i < starts.length) {
        let turn = 1;
        while(turn > 0) {
          if (hash.has(starts[i] + turn) === false) {
            if(counter < turn) {
              counter = turn;
            }
            turn = 0;
            continue;
          }
          turn++;
        }
        i++;
      }

      return counter;
    }
}
