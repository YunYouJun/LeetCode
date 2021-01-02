function sum(accout: number[]) {
  return accout.reduce((accumulator, curVal) => {
    return accumulator + curVal;
  });
}

function maximumWealth(accounts: number[][]): number {
  let max = 0;
  accounts.forEach((account) => {
    const res = sum(account);
    if (res > max) {
      max = res;
    }
  });
  return max;
}
