from collections import Counter
class Solution:
    def uncommonFromSentences(self, A: str, B: str) -> [str]:
        count = {}
        count = Counter(A.split())
        count += Counter(B.split())
        return [word for word in count if count[word] == 1]