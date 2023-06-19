/**
 * 双向链表节点
 */
export class DLinkedNode {
  key: number
  value: number
  prev: DLinkedNode | null
  next: DLinkedNode | null

  constructor(key?: number, value?: number) {
    this.key = key === undefined ? 0 : key
    this.value = value === undefined ? 0 : value
    this.prev = null
    this.next = null
  }
}

export class LRUCache {
  cache: Map<number, DLinkedNode>
  head: DLinkedNode
  tail: DLinkedNode
  /**
   * 容量
   */
  capacity: number
  size: number

  constructor(capacity: number) {
    this.cache = new Map()
    this.head = new DLinkedNode()
    this.tail = new DLinkedNode()
    this.head.next = this.tail
    this.tail.prev = this.head
    this.capacity = capacity
    this.size = 0
  }

  get(key: number): number {
    if (!this.cache.has(key))
      return -1

    // 如果 key 存在，先通过哈希表定位，再移到头部
    const node = this.cache.get(key)!
    this.moveToHead(node)
    return node.value
  }

  put(key: number, value: number): void {
    if (!this.cache.has(key)) {
      // 如果 key 不存在，创建一个新的节点
      const node = new DLinkedNode(key, value)
      // 添加进哈希表
      this.cache.set(key, node)
      // 添加至双向链表的头部
      this.addToHead(node)
      this.size++
      if (this.size > this.capacity) {
        // 如果超出容量，删除双向链表的尾部节点
        const removed = this.removeTail()
        // 删除哈希表中对应的项
        this.cache.delete(removed.key)
        this.size--
      }
    }
    else {
      // 如果 key 存在，先通过哈希表定位，再修改 value，并移到头部
      const node = this.cache.get(key)!
      node.value = value
      this.moveToHead(node)
    }
  }

  addToHead(node: DLinkedNode): void {
    node.prev = this.head
    node.next = this.head.next
    this.head.next!.prev = node
    this.head.next = node
  }

  removeNode(node: DLinkedNode): void {
    node.prev!.next = node.next
    node.next!.prev = node.prev
  }

  moveToHead(node: DLinkedNode): void {
    this.removeNode(node)
    this.addToHead(node)
  }

  removeTail(): DLinkedNode {
    const node = this.tail.prev!
    this.removeNode(node)
    return node
  }
}

/**
* Your LRUCache object will be instantiated and called as such:
* var obj = new LRUCache(capacity)
* var param_1 = obj.get(key)
* obj.put(key,value)
*/
