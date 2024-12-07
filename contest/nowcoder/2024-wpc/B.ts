/* eslint-disable no-console */
/* eslint-disable unicorn/prefer-node-protocol */
import * as process from 'process'
import * as readline from 'readline'

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})
const input: string[] = []

rl.on('line', (line) => {
  input.push(line)
})

rl.on('close', () => {
  const arr = input[0].split(' ').map(v => Number.parseInt(v))
  console.log(main(arr[0], arr[1]))
})

/**
 * 三角形变换
 * 给你 3 根长度为 a 的木棍，每次你可以选择一根木棍并改变它的长度，要求每次改变前后这 3 根木棍都能构成一个三角形，且木棍长度始终为整数。
 * 求最少改变多少次，能使这 3 根木棍的长度全部变为 b。
 *
 * 输入：两个正整数 a,b(1 <= a,b <= 10^18)含义如上。
 * 输出：输出变换需要的最少改变数，若无解，输出 -1。
 *
 * 示例：3 5 => 3
 */
function main(a: number, b: number) {
  // let step = 0
  // function change(arr: [number, number, number], index: number, target: number) {
  //   if (arr[0] === target && arr[1] === target && arr[2] === target) {
  //     return step
  //   }

  //   if (arr[index] === b) {
  //     return change(arr, (index + 1) % 3, target)
  //   }

  //   // 最小也要保证大于等于另外两根的差值
  //   arr[index] = Math.max(
  //     Math.abs((arr[(index + 1) % 3] - arr[(index + 2) % 3])) + 1,
  //     target,
  //   )
  //   step++
  //   return change(arr, (index + 1) % 3, target)
  // }

  if (a === b)
    return 0
  if (a < b) {
    [a, b] = [b, a]
  }
  if (b === 1)
    return -1
  if (a >= 2 * b) {
    // return change([a, a, a], 0, b)
    // let steps = 0
    // while (a > b) {
    //   a = Math.max(b, a - b + 1)
    //   steps++
    // }
    // return steps + 2 // 最后两根木棍也需要变为 b

    // 您提交的程序没有通过所有的测试用例
    const step = Math.ceil((a - b) / (b - 1))
    return step + 2
  }
  return 3
}

// 20 20 20 -> 5 5 5
// 5 20 20 -> 5 16 20 -> 5 16 12 -> 5 8 12 -> 5 8 5 -> 5 5 5
// 100 100 100 -> 5 5 5
// 5 100 100 -> 5 96

// 10 10 10 -> 2 2 2
// 2 10 10 -> 2 9 10 -> 2 9 8 -> 2 7 8 -> 2 7 6 -> 2 5 6 -> 2 5 4 -> 2 3 4 -> 2 3 2 -> 2 2 2
