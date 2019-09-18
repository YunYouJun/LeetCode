class MyQueue:

    def __init__(self):
        """
        Initialize your data structure here.
        """
        self.s1 = []
        self.s2 = []
        self.front = None

    def push(self, x: int) -> None:
        """
        Push element x to the back of queue.
        """
        if len(self.s1) == 0:
            self.front = x
        self.s1.append(x)

    def pop(self) -> int:
        """
        Removes the element from in front of queue and returns that element.
        """
        if len(self.s2) == 0:
            while len(self.s1) != 0:
                self.s2.append(self.s1.pop())
        return self.s2.pop()
        
    def peek(self) -> int:
        """
        Get the front element.
        """
        if len(self.s2) != 0:
            return self.s2[-1]
        return self.front

    def empty(self) -> bool:
        """
        Returns whether the queue is empty.
        """
        return len(self.s1) == 0 and len(self.s2) == 0

# Your MyQueue object will be instantiated and called as such:
# obj = MyQueue()
# obj.push(x)
# param_2 = obj.pop()
# param_3 = obj.peek()
# param_4 = obj.empty()