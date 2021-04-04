import collections


class Solution:
    def firstUniqChar(self, s: str) -> str:
        position = dict()
        q = collections.deque()
        n = len(s)
        for i, ch in enumerate(s):
            if ch not in position:
                position[ch] = i
                q.append((s[i], i))
            else:
                position[ch] = -1
                while q and position[q[0][0]] == -1:
                    q.popleft()
        return ' ' if not q else q[0][0]


if __name__ == '__main__':
    test_cases = ["abaccdeff", "", "leetcode", "aadadaad"]
    for case in test_cases:
        ans = Solution().firstUniqChar(case)
        print(ans)
