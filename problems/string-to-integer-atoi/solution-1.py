import re
class Solution:
    def myAtoi(self, str: str) -> int:
        return max(min(int(*re.findall(r'^[\+\-]?\d+', str.lstrip())), 2**31 - 1), -2**31)

# ^：匹配字符串开头
# [\+\-]：代表一个+字符或-字符
# ?：前面一个字符可有可无
# \d：一个数字
# +：前面一个字符的一个或多个
# \D：一个非数字字符
# *：前面一个字符的0个或多个