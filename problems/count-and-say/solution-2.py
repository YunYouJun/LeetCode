class Solution:
    def countAndSay(self, n: int) -> str:
        say = '1'
        while n > 1 :
            n -= 1
            temp = say
            tag = temp[0]
            count = 1
            say = ''
            for j in range(1, len(temp)):
                if temp[j] == tag:
                    count += 1
                else:
                    say += str(count) + tag
                    tag = temp[j]
                    count = 1
            say += str(count) + tag
        return say