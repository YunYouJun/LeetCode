from collections import Counter
class Solution:
    def intersect(self, nums1: [int], nums2: [int]) -> [int]:
        nums1, nums2, ans = Counter(nums1), Counter(nums2), []
        for key in nums1.keys():
            if nums1[key] and nums2[key]:
                ans += [key] * min(nums1[key], nums2[key])
        return ans