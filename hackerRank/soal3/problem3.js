function getMoneySpent(keyboards, drives, budget) {
  let maxSpent = -1;

  for (let keyboardPrice of keyboards) {
    for (let drivePrice of drives) {
      const totalCost = keyboardPrice + drivePrice;

      if (totalCost <= budget && totalCost > maxSpent) {
        maxSpent = totalCost;
      }
    }
  }

  return maxSpent;
}

const budget = 10;
const keyboards = [3, 1];
const drives = [5, 2, 8];

console.log(getMoneySpent(keyboards, drives, budget));
