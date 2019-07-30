class Solution:
    def nextGreaterElement(self, nums1: [int], nums2: [int]) -> [int]:
        ans = []
        for n1 in nums1:
            temp = -1
            for n2 in nums2[nums2.index(n1):]:
                if n2 > n1:
                    temp = n2
                    break
            ans.append(temp)
        return ans