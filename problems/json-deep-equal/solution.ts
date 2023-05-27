function isObject(o: any): boolean {
  return typeof o === 'object' && o !== null
}

export function areDeeplyEqual(o1: any, o2: any): boolean {
  if (typeof o1 !== typeof o2)
    return false

  if (!isObject(o1) || !isObject(o2))
    return o1 === o2

  // 数组
  if (Array.isArray(o1) !== Array.isArray(o2))
    return false
  if (Array.isArray(o1)) {
    if (o1.length !== o2.length)
      return false
  }

  for (const key in o1) {
    if (!(key in o2))
      return false

    if (!areDeeplyEqual(o1[key], o2[key]))
      return false
  }

  return true
}
