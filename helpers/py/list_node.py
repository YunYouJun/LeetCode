class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None


def build_list_node(numbers: [int]):
    """
    从数组构建链表
    """
    if not numbers or len(numbers) == 0:
        print('数组不存在或为空')
    head = ListNode(numbers[0])
    root = head
    for i in range(1, len(numbers)):
        head.next = ListNode(numbers[i])
        head = head.next
    return root


def print_list_node(head: ListNode):
    """
    以数组的形式打印链表节点
    """
    ans = []
    while head:
        ans.append(head.val)
        head = head.next
    print(ans)
