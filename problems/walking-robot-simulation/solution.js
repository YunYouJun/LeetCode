/**
 * @param {number[]} commands
 * @param {number[][]} obstacles
 * @return {number}
 */
export const robotSim = function (commands, obstacles) {
  const pos = [0, 0]
  let curDir = 0
  const direction = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ]
  let ans = 0
  const set = new Set()
  obstacles.forEach((obs) => {
    set.add(`[${obs[0]},${obs[1]}]`)
  })
  commands.forEach((cmd) => {
    if (cmd === -2) {
      curDir = (curDir - 1 + 4) % 4
    }
    else if (cmd === -1) {
      curDir = (curDir + 1) % 4
    }
    else {
      for (let i = 0; i < cmd; i++) {
        const x = pos[0] + direction[curDir][0]
        const y = pos[1] + direction[curDir][1]
        if (!set.has(`[${x},${y}]`)) {
          pos[0] = x
          pos[1] = y
        }
        ans = Math.max(ans, pos[0] * pos[0] + pos[1] * pos[1])
      }
    }
  })
  return ans
}
