from typing import List


class Solution:
    def validateStackSequences(self, pushed: List[int], popped: List[int]) -> bool:
        """
        题目指出 pushed 是 popped 的排列 。因此，无需考虑 pushedpushed 和 poppedpopped 长度不同 或 包含元素不同 的情况。
        """
        stack = []
        i = 0
        for n in pushed:
            stack.append(n)
            while stack and stack[-1] == popped[i]:
                stack.pop()
                i += 1
        return not stack


if __name__ == '__main__':
    test_cases = [[[], []], [[1, 0], [1, 0]], [[1, 2, 3, 4, 5], [4, 5, 3, 2, 1]
                                               ], [[1, 2, 3, 4, 5], [4, 3, 5, 1, 2]]]
    for case in test_cases:
        ans = Solution().validateStackSequences(*case)
        print(ans)
