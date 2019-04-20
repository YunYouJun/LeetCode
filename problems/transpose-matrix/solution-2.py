class Solution:
    def transpose(self, A: [[int]]) -> [[int]]:
        return list(map(list, zip(*A)))