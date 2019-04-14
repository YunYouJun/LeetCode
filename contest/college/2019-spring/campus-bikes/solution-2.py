# 超时
class Solution:
    def assignBikes(self, workers, bikes):
        l = len(workers)
        arr = [None]*l
        dic = [[None for i in range(len(bikes))] for j in range(l)]
        for i, worker in enumerate(workers):
            for j, bike in enumerate(bikes):
                distance = self.Manhattan(worker, bike)
                dic[i][j] = distance
        while l:
            l -= 1
            minDistance = 2000
            for i, worker in enumerate(workers):
                for j, bike in enumerate(bikes):
                    if dic[i][j] and dic[i][j] < minDistance:
                        minDistance = dic[i][j]
                        minWorkerIndex = i
                        minBikeIndex = j
            arr[minWorkerIndex] = minBikeIndex
            for i in range(len(bikes)):
                dic[minWorkerIndex][i] = None
            for i in range(len(workers)):
                dic[i][minBikeIndex] = None
        
        return arr

    def Manhattan(self, worker, bike):
        return abs(worker[0] - bike[0]) + abs(worker[1] - bike[1])

# print(Solution().assignBikes([[0,0],[2,1]], [[1,2],[3,3]]))
print(Solution().assignBikes([[0,0],[1,1],[2,0]], [[1,0],[2,2],[2,1]]))