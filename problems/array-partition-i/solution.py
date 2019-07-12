# 先对给定数列排序（此处为升序）；视元素为成对出现，则取数对中的第一个数字即是取出数对中的较小元素（操作中取排序后的数列的所有第奇数个就行）；最后求和。
class Solution:
    def arrayPairSum(self, nums: [int]) -> int:
        return sum(sorted(nums)[::2])