class Solution:
    def distributeCandies(self, candies: int, num_people: int) -> [int]:
        dist = [0 for i in range(num_people)]
        give_away = 1
        i = 0

        while candies > 0:
            if give_away <= candies:
                dist[i] += give_away
            else:
                give_away = candies
                dist[i] += give_away

            candies -= give_away
            give_away += 1
            if i != len(dist) - 1:
                i += 1
            else:
                i = 0

        return dist