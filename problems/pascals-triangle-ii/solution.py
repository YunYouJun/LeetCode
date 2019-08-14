class Solution:
    def getRow(self, rowIndex: int) -> [int]:
        row = [1 for i in range(rowIndex+1)]
        temp = [1 for i in range(rowIndex+1)]
        for i in range(2, rowIndex+1):
            for j in range(1, i):
                row[j] = temp[j-1] + temp[j]
            temp = row[:]
        return row