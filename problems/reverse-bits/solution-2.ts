export function reverseBits(n: number): number {
  let rev = 0
  for (let i = 0; i < 32 && n > 0; i++) {
    // (n & 1) << (31 - i) 优先
    rev |= (n & 1) << (31 - i)
    n >>>= 1
  }
  return rev >>> 0
}
