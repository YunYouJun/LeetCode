//  连续重复 k 次
import { testFunction } from '@/utils'

function maxRepeating(sequence: string, word: string): number {
  let count = 1
  while (word.length * count <= sequence.length) {
    if (sequence.includes(word.repeat(count)))
      count += 1
    else break
  }
  return count - 1
}
const testcases = [
  ['ababc', 'ab'],
  ['ababc', 'ba'],
  ['ababc', 'ac'],
  ['aaabaaaabaaabaaaabaaaabaaaabaaaaba', 'aaaba'],
]
const expectedResults = [2, 1, 0, 5]
testFunction(maxRepeating, testcases, expectedResults)
