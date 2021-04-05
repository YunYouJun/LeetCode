class Solution:
    def reverseWords(self, s: str) -> str:
        s = s.strip()
        i = j = len(s) - 1
        res = []
        while i >= 0:
            # 搜索空格
            while i >= 0 and s[i] != ' ':
                i -= 1
            # 添加单词
            res.append(s[i + 1: j + 1])
            while s[i] == ' ':
                i -= 1
            # 指向下个单词的尾部
            j = i
        return ' '.join(res)


if __name__ == '__main__':
    test_cases = ["the sky is blue", "  hello world!  ", "a good   example"]
    for case in test_cases:
        ans = Solution().reverseWords(case)
        print(ans)
