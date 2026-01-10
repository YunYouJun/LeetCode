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
  const arrStr = input[0].split(' ')
  const a = Number.parseInt(arrStr[0])
  const b = Number.parseInt(arrStr[1])
  console.log(main(a, b))
})

/**
 * 一起吃饭
 */
function main(a: number, b: number) {
  if (a === b) {
    return 'Yes'
  }
  else {
    return 'No'
  }
}
