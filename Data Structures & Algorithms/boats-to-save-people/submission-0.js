class Solution {
    /**
     * @param {number[]} people
     * @param {number} limit
     * @return {number}
     */
    numRescueBoats(people, limit) {
      people.sort((a,b) => a - b);
      let boat_count = 0;
      let l = 0;
      let r = people.length - 1;
      while(l <= r) {
        if(people[l] + people[r] <= limit) {
          boat_count++;
          l++;
          r--;
          continue;
        } else {
          boat_count++;
          r--;
        }
      }
      return boat_count;
    }
}
