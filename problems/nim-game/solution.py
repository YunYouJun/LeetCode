# Solution: https://leetcode-cn.com/problems/nim-game/solution/
class Solution:
    def canWinNim(self, n: int) -> bool:
        return (n%4 != 0)