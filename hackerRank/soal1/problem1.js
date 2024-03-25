function countingValleys(steps, path) {
  let altitude = 0;
  let valleys = 0;
  let inValley = false;

  for (let step of path) {
    if (step === "U") {
      altitude++;
    } else {
      altitude--;
    }

    if (altitude < 0) {
      inValley = true;
    } else if (altitude === 0 && inValley) {
      valleys++;
      inValley = false;
    }
  }

  return valleys;
}

const steps = 8;
const path = "UDDDUDUU";

console.log(countingValleys(steps, path));
