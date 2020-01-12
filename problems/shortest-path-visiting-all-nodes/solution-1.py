import collections
class Solution(object):
    def shortestPathLength(self, graph):
        N = len(graph)
        queue = collections.deque((1 << x, x) for x in range(N))
        dist = collections.defaultdict(lambda: float('inf'))
        for x in range(N): dist[1 << x, x] = 0

        while queue:
            cover, head = queue.popleft()
            d = dist[cover, head]
            if cover == 2**N - 1: return d
            for child in graph[head]:
                cover2 = cover | (1 << child)
                if d + 1 < dist[cover2, child]:
                    dist[cover2, child] = d + 1
                    queue.append((cover2, child))