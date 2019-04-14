class Solution:
    def shortestWay(self, source: str, target: str) -> int:
        time = 1
        s = source
        count = 0
        for t in target:
            count += 1
            cur = s.find(t)
            if cur == -1:
                if source.find(t) == -1: return -1
                else:
                    s = source
                    time += 1
                    cur = s.find(t)
                    s = s[cur + 1:]
                    continue
            
            s = s[cur + 1:]
            if len(s) == 0 and count != len(target):
                s = source
                time += 1
            
        return time
            
# print(Solution().shortestWay("abc", "abcbc"))
# # 2
# print(Solution().shortestWay("abc", "acdbc"))
# # -1
# print(Solution().shortestWay("xyz", "xzyxz"))
# # 3
# print(Solution().shortestWay("a", "aaaaa"))
# # 5
# print(Solution().shortestWay("", "aaaaa"))
# # -1
# print(Solution().shortestWay("aaaaa", "aaaaaaaaaaaaa"))
# # 3
# print(Solution().shortestWay())
# # 13
