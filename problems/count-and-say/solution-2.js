/**
 * @param {number} n
 * @return {string}
 */
let countAndSay = function(n) {
  let say = '1';
  for (let i = 1; i < n; i++) {
    let temp = say;
    let tag = temp[0];
    let count = 1;
    say = '';
    for (let j = 1; j < temp.length; j++) {
      if (temp[j] === tag) {
        count++;
      } else {
        say += count + tag;
        tag = temp[j];
        count = 1;
      }
    }
    say += count + tag;
  }
  return say;
};