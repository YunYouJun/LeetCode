class Solution(object):
    def shortestPathLength(self, graph):
        N = len(graph)
        dist = [[float('inf')] * N for i in range(1 << N)]
        for x in range(N):
            dist[1<<x][x] = 0

        for cover in range(1 << N):
            repeat = True
            while repeat:
                repeat = False
                for head, d in enumerate(dist[cover]):
                    for nei in graph[head]:
                        cover2 = cover | (1 << nei)
                        if d + 1 < dist[cover2][nei]:
                            dist[cover2][nei] = d + 1
                            if cover == cover2:
                                repeat = True

        return min(dist[2**N - 1])