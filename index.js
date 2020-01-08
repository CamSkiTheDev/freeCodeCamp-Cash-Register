// Declare function to check if we can make change
const checkCashRegister = (price, cash, cid) => {
  // Calculate the amount of change due * 100 to correct for floating point number issue
  let changeDue = Math.round((cash - price) * 100)
  // Declare currency array with integers due to floating point number issue
  const currency = [1, 5, 10, 25, 100, 500, 1000, 2000, 10000]
  // Declare empty changeArray for uses later
  const changeArry = []
  // Loop through and convert cid to integers due to floating point number issue
  cid.forEach(x => (x[1] = Math.round(x[1] * 100)))

  // Declare helper function to check if the register has enough funds
  const gotCash = cashInReg => {
    const sum = cashInReg.filter((x, i) => changeDue >= currency[i])
    return sum.reduce((prev, curr) => prev + curr[1], 0)
  }

  // Check if the amount due is greater then the change in the register
  if (gotCash(cid) < changeDue)
    return { status: 'INSUFFICIENT_FUNDS', change: [] }
  // Check if the amount due is equal to the change in the register
  if (gotCash(cid) === changeDue) {
    // Convert cid back to floats and then return
    cid.forEach(x => (x[1] /= 100))
    return { status: 'CLOSED', change: cid }
  }

  // Loop and calculate the change
  for (let i = cid.length - 1; i > -1; i--) {
    let value = 0
    while (cid[i][1] > 0 && changeDue >= currency[i]) {
      // Update everything while the condition is true
      changeDue -= currency[i]
      cid[i][1] -= currency[i]
      // Set the value to keep track of change due and type of currency
      value += currency[i]
    }
    // Push type of currency and amount to the change array
    if (value) changeArry.push([cid[i][0], value])
  }
  // Convert changeArray back to floats and then return
  changeArry.forEach(x => (x[1] /= 100))
  return { status: 'OPEN', change: changeArry }
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.1],
// ["QUARTER", 4.25],
// ["ONE", 90],
// ["FIVE", 55],
// ["TEN", 20],
// ["TWENTY", 60],
// ["ONE HUNDRED", 100]]

checkCashRegister(19.5, 20, [
  ['PENNY', 0.5],
  ['NICKEL', 0],
  ['DIME', 0],
  ['QUARTER', 0],
  ['ONE', 0],
  ['FIVE', 0],
  ['TEN', 0],
  ['TWENTY', 0],
  ['ONE HUNDRED', 0],
])
