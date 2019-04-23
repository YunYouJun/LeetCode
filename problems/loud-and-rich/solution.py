class Solution:
    def loudAndRich(self, richer, quiet):
        '''
        richer : [[int]]
        quiet: [int]
        return: [int]
        '''
        N = len(quiet)
        graph = [[] for _ in range(N)]
        for u, v in richer:
            graph[v].append(u)
        
        answer = [None] * N

        def dfs(node):
            if answer[node] is None:
                answer[node] = node
                for child in graph[node]:
                    cand = dfs(child)
                    if quiet[cand] < quiet[answer[node]]:
                        answer[node] = cand
            return answer[node]
        
        return list(map(dfs, range(N)))