function largeGroupPositions(s: string): number[][] {
  let start = 0;
  let result = [];

  const len = s.length;
  for (let i = 0; i < len; i++) {
    if (i === len - 1 || s[i] !== s[i + 1]) {
      if (i - start + 1 >= 3) {
        result.push([start, i]);
      }
      start = i + 1;
    }
  }
  return result;
}

const testSet = ["aaa", "abbxxxxzzy", "abc", "abcdddeeeeaabbbcd"];
import { testFunction } from "@/utils";
testFunction(largeGroupPositions, testSet);
