/* eslint-disable no-console */
/* eslint-disable unicorn/prefer-node-protocol */
import * as process from 'process'
import * as readline from 'readline'

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})
const input: any[] = []

rl.on('line', (line) => {
  input.push(line)
})

rl.on('close', () => {
  const n = Number.parseInt(input[0])
  console.log(main(n))
})

/**
 * 麦当劳
 */
function main(n: number) {
  if (n === 50) {
    return 'KFC'
  }
  else {
    return 'McDonald\'s'
  }
}
