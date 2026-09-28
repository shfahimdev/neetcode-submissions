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
        if(people[l] + people[r] <= limit) l++;
          r--;
          boat_count++;
      }
      return boat_count;
    }
}