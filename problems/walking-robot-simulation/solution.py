class Solution:
    def robotSim(self, commands: [int], obstacles: [[int]]) -> int:
        dir = [
            [0, 1],
            [1, 0],
            [0, -1],
            [-1, 0]
        ]
        curDir = 0
        pos = [0, 0]
        obstacleSet = set(map(tuple, obstacles))
        ans = 0
        for cmd in commands:
            if cmd == -2:
                curDir = (curDir - 1) % 4
            elif cmd == -1:
                curDir = (curDir + 1) % 4
            else:
                for _ in range(cmd):
                    if (pos[0] + dir[curDir][0], pos[1] + dir[curDir][1]) not in obstacleSet:
                        pos[0] += dir[curDir][0]
                        pos[1] += dir[curDir][1]
                        ans = max(ans, pos[0]*pos[0] + pos[1]*pos[1])
        return ans