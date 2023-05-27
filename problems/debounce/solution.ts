type F = (...args: any[]) => any

export function debounce<T extends F>(fn: T, t: number): T {
  let timer: ReturnType<typeof setTimeout> | null = null

  return function (...args: any[]) {
    if (timer)
      clearTimeout(timer)

    timer = setTimeout(() => {
      fn(...args)
    }, t)
  } as T
}
