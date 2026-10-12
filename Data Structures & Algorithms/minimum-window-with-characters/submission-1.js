class Solution {
  /**
   * @param {string} s
   * @param {string} t
   * @return {string}
   */
  minWindow(s, t) {
    if (!t) return "";
    let countT = new Map();
    let window = new Map();

    for (const c of t) {
      if (!countT.has(c)) countT.set(c, 1);
      else countT.set(c, countT.get(c) + 1);
    }

    let have = 0;
    let need = countT.size;
    let res = [-1, -1];
    let resLen = Infinity;
    let l = 0;

    for (let r = 0; r < s.length; r++) {
      let c = s[r];
      if (!window.has(c)) window.set(c, 1);
      else window.set(c, window.get(c) + 1);

      if (countT.has(c) && countT.get(c) === window.get(c)) have++;

      while (have === need) {
        if (r - l + 1 < resLen) {
          res = [l, r];
          resLen = r - l + 1;
        }
        window.set(s[l], window.get(s[l]) - 1);
        if (countT.has(s[l]) && countT.get(s[l]) > window.get(s[l])) have--;
        l++;
      }
    }
    return s.slice(res[0], res[1] + 1);
  }
}
