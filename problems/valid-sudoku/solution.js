/**
 * @param {character[][]} board
 * @return {boolean}
 */
const isValidSudoku = function (board) {
  const rows = []
  const columns = []
  const boxes = []
  for (let i = 0; i < 9; i++) {
    rows[i] = new Map()
    columns[i] = new Map()
    boxes[i] = new Map()
  }
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const num = board[i][j]
      if (num !== '.') {
        const n = Number.parseInt(num)
        const box_index = Math.floor((i / 3)) * 3 + Math.floor(j / 3)
        rows[i].set(n, rows[i].get(n) ? rows[i].get(n) + 1 : 1)
        columns[j].set(n, columns[j].get(n) ? columns[j].get(n) + 1 : 1)
        boxes[box_index].set(n, boxes[box_index].get(n) ? boxes[box_index].get(n) + 1 : 1)
        if (rows[i].get(n) > 1 || columns[j].get(n) > 1 || boxes[box_index].get(n) > 1)
          return false
      }
    }
  }
  return true
}
