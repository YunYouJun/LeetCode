/**
 * @param {number[]} bills
 * @return {boolean}
 */
const lemonadeChange = function (bills) {
  let five = 0
  let ten = 0
  for (let i = 0; i < bills.length; i++) {
    switch (bills[i]) {
      case 5:
        five++
        break
      case 10:
        ten++
        five--
        if (five < 0)
          return false
        break
      case 20:
        if (ten > 0) {
          ten--
          five--
        }
        else {
          five -= 3
        }
        if (five < 0)
          return false
        break
      default:
        break
    }
  }
  return true
}
