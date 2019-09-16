from typing import List
class Solution:
    def floodFill(self, image: List[List[int]], sr: int, sc: int, newColor: int) -> List[List[int]]:
        if image[sr][sc] != newColor:
            old, image[sr][sc] = image[sr][sc], newColor
            for i, j in zip((sr, sr + 1, sr, sr - 1), (sc + 1, sc, sc - 1, sc)):
                if 0 <= i < len(image) and 0 <= j < len(image[0]) and image[i][j] == old:
                    self.floodFill(image, i, j, newColor)
        return image