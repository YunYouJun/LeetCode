# 超时
class Solution:
    def assignBikes(self, workers, bikes):
        l = len(workers)
        arr = [None]*l
        while l:
            l -= 1
            minDistance = 2000
            for i, worker in enumerate(workers):
                if worker:
                    for j, bike in enumerate(bikes):
                        if bike:
                            distance = self.Manhattan(worker, bike)
                            if distance < minDistance:
                                minDistance = distance
                                minWorkerIndex = i
                                minBikeIndex = j
            arr[minWorkerIndex] = minBikeIndex
            workers[minWorkerIndex] = None
            bikes[minBikeIndex] = None
        return arr

    def Manhattan(self, worker, bike):
        return abs(worker[0] - bike[0]) + abs(worker[1] - bike[1])

print(Solution().assignBikes([[0,0],[2,1]], [[1,2],[3,3]]))