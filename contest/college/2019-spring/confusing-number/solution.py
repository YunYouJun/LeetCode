class Solution:
    def confusingNumber(self, N: int) -> bool:
        dic = {
            "0": "0",
            "1": "1",
            "6": "9",
            "8": "8",
            "9": "6"
        }
        result = str(N)[::-1]
        number = ''
        for c in result:
            if (c in dic):
                number += dic[c]
            else:
                return False
        return int(number) != N
