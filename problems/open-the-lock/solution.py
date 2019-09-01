from typing import List
from queue import Queue
class Solution:
    def openLock(self, deadends: List[str], target: str) -> int:
        deadends = set(deadends)
        if '0000' in deadends:
            return -1
        
        q = Queue()
        q.put(('0000', 0))

        while not q.empty():
            node, step = q.get()
            for i in range(4):
                for add in (1, -1):
                    cur = node[:i] + str((int(node[i]) + add) % 10) + node[i+1:]
                    if cur == target:
                        return step + 1
                    if cur not in deadends:
                        q.put((cur, step + 1))
                        deadends.add(cur)

        return -1