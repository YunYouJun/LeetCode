//  连续重复 k 次
function maxRepeating(sequence: string, word: string): number {
  let count = 0;
  let i = 0;
  let temp = 0;
  while (i < sequence.length) {
    if (sequence.slice(i, i + word.length) === word) {
      i += word.length;
      temp += 1;
      count = Math.max(count, temp);
    } else {
      i += temp > 0 ? 1 - word.length : 1;
      temp = 0;
    }
  }
  return count;
}

import { testFunction } from "../../utils";
const testcases = [
  ["ababc", "ab"],
  ["ababc", "ba"],
  ["ababc", "ac"],
  ["aaabaaaabaaabaaaabaaaabaaaabaaaaba", "aaaba"],
];
const expectedReults = [2, 1, 0, 5];
testFunction(maxRepeating, testcases, expectedReults);
