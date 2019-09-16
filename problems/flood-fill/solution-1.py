from typing import List
from queue import Queue
class Solution:
    def floodFill(self, image: List[List[int]], sr: int, sc: int, newColor: int) -> List[List[int]]:
        if newColor == image[sr][sc]:
            return image
        directions = {(1, 0), (-1, 0), (0, 1), (0, -1)}
        que = Queue()
        que.put((sr, sc))
        originalcolor = image[sr][sc]
        while not que.empty():
            point = que.get()
            image[point[0]][point[1]] = newColor
            for direction in directions:
                new_i = point[0] + direction[0]
                new_j = point[1] + direction[1]
                if 0 <= new_i < len(image) and 0 <= new_j < len(image[0]) and image[new_i][new_j] == originalcolor:
                    que.put((new_i, new_j))
        return image