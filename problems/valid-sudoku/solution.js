/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  let rows = []
  let columns = []
  let boxes = []
  for (let i = 0; i < 9; i++) {
    rows[i] = new Map()
    columns[i] = new Map()
    boxes[i] = new Map()
  }
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      let num = board[i][j]
      if (num !== '.') {
        let n = parseInt(num)
        let box_index = Math.floor((i / 3)) * 3 + Math.floor(j / 3)
        rows[i].set(n, rows[i].get(n) ? rows[i].get(n) + 1 : 1)
        columns[j].set(n, columns[j].get(n) ? columns[j].get(n) + 1 : 1)
        boxes[box_index].set(n, boxes[box_index].get(n) ? boxes[box_index].get(n) + 1 : 1)
        if (rows[i].get(n) > 1 || columns[j].get(n) > 1 || boxes[box_index].get(n) > 1) {
          return false
        }
      }
    }
  }
  return true
}