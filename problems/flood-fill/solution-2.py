from typing import List
from queue import Queue
class Solution:
    def floodFill(self, image: List[List[int]], sr: int, sc: int, newColor: int) -> List[List[int]]:
        if newColor == image[sr][sc]: return image
        stack, old = [(sr, sc)], image[sr][sc]
        while stack:
            point = stack.pop()
            image[point[0]][point[1]] = newColor
            for new_i, new_j in zip((point[0], point[0], point[0] + 1, point[0] - 1), (point[1] + 1, point[1] - 1, point[1], point[1])):
                if 0 <= new_i < len(image) and 0 <= new_j < len(image[0]) and image[new_i][new_j] == old:
                    stack.append((new_i, new_j))
        return image