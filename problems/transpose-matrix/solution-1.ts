/**
 * 转置矩阵
 * @param matrix
 */
function transpose(matrix: number[][]): number[][] {
  let ans = [];
  for (let i = 0; i < matrix[0].length; i++) {
    let row = [];
    for (let j = 0; j < matrix.length; j++) {
      row.push(matrix[j][i]);
    }
    ans.push(row);
  }
  return ans;
}

const testSet = [
  [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ],
  [
    [1, 2, 3],
    [4, 5, 6],
  ],
];
import { testFunction } from "@/utils";
testFunction(transpose, testSet);
