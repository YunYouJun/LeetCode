/**
 * @param {number[][]} richer
 * @param {number[]} quiet
 * @return {number[]}
 */
const loudAndRich = function (richer, quiet) {
  const graph = []
  for (let i = 0; i < quiet.length; i++)
    graph[i] = []

  richer.forEach((edge) => {
    graph[edge[1]].push(edge[0])
  })
  const answer = []
  function dfs(node) {
    if (answer[node] === undefined) {
      answer[node] = node
      graph[node].forEach((child) => {
        const cand = dfs(child)
        if (quiet[cand] < quiet[answer[node]])
          answer[node] = cand
      })
    }
    return answer[node]
  }

  for (let i = 0; i < quiet.length; i++) dfs(i)
  return answer
}
