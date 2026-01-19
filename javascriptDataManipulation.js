 // SECOND ATTEMPT AT EXERCISE //


const n1 = 10;
const n2 = 15;
const n3 = 5;
const n4 = 20;
console.log(`Numbers: n1=${n1}, n2=${n2}, n3=${n3}, n4=${n4}`)

const sumIs50 = n1 + n2 + n3 + n4 === 50;
console.log(sumIs50)
console.log(`The sum of the four numbers equal 50 ${sumIs50}`)

const n1IsOdd = n1 % 2 !==0;
console.log(n1IsOdd)
console.log(`The first number is odd ${n1IsOdd}`)

const n2IsOdd = n2 % 2 !==0;
console.log(n2IsOdd)
console.log(`The second number is odd ${n2IsOdd}`)

const n3IsOdd = n3 % 2 !==0;
console.log(n3IsOdd)
console.log(`The third number is odd ${n3IsOdd}`)

const n4IsOdd = n4 % 2 !==0;
console.log(n4IsOdd)
console.log(`The forth number is odd ${n4IsOdd}`)

const oddCount = 
    (n1IsOdd ? 1 : 0) +
    (n2IsOdd ? 1 : 0) +
    (n3IsOdd ? 1 : 0) +
    (n4IsOdd ? 1 : 0);

console.log(oddCount)
console.log(`Total number of of odd numbers is ${oddCount}`)

const hasAtLeastTwoOdds = oddCount >= 2;
console.log(hasAtLeastTwoOdds)
console.log(`At least two odd numbers ${hasAtLeastTwoOdds}`)

const isUnder25 = n1 < 25 || n2 < 25 || n3 < 25 || n4 < 25;
console.log(isUnder25)
console.log(`All of the four numbers is less than 25: ${isUnder25}`);

const allUnique =
    n1 !== n2 &&
    n1 !== n3 &&
    n1 !== n4 &&
    n2 !== n3 &&
    n2 !== n4 &&
    n3 !== n4;

console.log(allUnique)
console.log(`All numbers are unique ${allUnique}`)

const isValid = 
    sumIs50 &&
    hasAtLeastTwoOdds &&
    isUnder25 &&
    allUnique;

console.log(isValid)
console.log(`Do all four numbers meet the orignial criteria? ${isValid}`)


const allDivisibleBy5 =
    n1 % 5 === 0 &&
    n2 % 5 === 0 &&
    n3 % 5 === 0 &&
    n4% 5 === 0;

console.log(allDivisibleBy5)
console.log(`Are all numbers divisible by 5? ${allDivisibleBy5}`)

const firstIsLargerThanLast = n1 > n4;
console.log(firstIsLargerThanLast)
console.log(`Is the first number larger than the last? ${firstIsLargerThanLast}`)

const step1 = n2 - n1;
const step2 = step1 * n3;
const step3Remainder = step2 % n4;

console.log(step3Remainder)

console.log(`Step 1 (n2 - n1) = ${step1}`)
console.log(`Step 2 (step1 * n3) = ${step2}`)
console.log(`Step 3 (step2 % n4) = ${step3Remainder}`)

console.log(`The first number substracted by the second number is ${step1}`)
console.log(`The product of the previous result multiplied by the third number is ${step2}`)
console.log(`The remainder from the previous result divided by the forth number is ${step3Remainder}`)

const allAtMost25 = n1 <= 25 && n2 <= 25 && n3 <= 25 && n4 <= 25;
console.log(allAtMost25)
console.log(`All number are under or equal to 25 ${allAtMost25}`)


// PART TWO

const totalDistanceMiles = 1500;
const fuelBudget = 175;
const costOfFuel = 3;
const mpgAt55 = 30;
const mpgAt60 = 28;
const mpgAt75 = 23;

// How many gallons of fuel will you need for the entire trip?

// 55mph
const gallonsAt55 = totalDistanceMiles / mpgAt55;
console.log(`If traveled at 55mph, the total amount of fuel needed will be ${gallonsAt55} gallons`)

const costAt55 = gallonsAt55 * costOfFuel;
console.log(`When traveling at 55mph, the total cost for fuel will be $${costAt55}.`)

const budgetAt55 = costAt55 <= fuelBudget;
console.log(`The fuel budget will be enough when traveling at 55mph. ${budgetAt55} `)

const durationAt55 = totalDistanceMiles / 55;
console.log(`If traveling speed is 55mph, the total duration of the trip will be ${durationAt55} hours.`)

// 60mph
const gallonsAt60 = totalDistanceMiles / mpgAt60;
console.log(`Traveling at 60mph will require ${gallonsAt60} gallons of gas total.`)

const costAt60 = gallonsAt60 * costOfFuel;
console.log(`When traveling at 60mph, the total amount spent on fuel will be $${costAt60}.`)

const budgetAt60 = costAt60 <= fuelBudget;
console.log(`When traveling at 60mph, will the fuel budget be enough? ${budgetAt60}`)

const durationAt60 = totalDistanceMiles / 60;
console.log(`The total duration of the trip will be take ${durationAt60} hour when traveling at a speed of 60mph.`)

// 75mph
const gallonsAt75 = totalDistanceMiles / mpgAt75;
console.log(`Traveling at a speed of 75mph will require ${gallonsAt75} gallons of gas total.`)

const costAt75 = gallonsAt75 * costOfFuel;
console.log(`When traveling at a speed of 75mph the amount spent on fuel will be $${costAt75}.`)

const budgetAt75 = costAt75 <= fuelBudget;
console.log(`Will the fuel budget be enough to trael at 75mph? ${budgetAt75}`)

const durationAt75 = totalDistanceMiles / 75;
console.log(`It will take ${durationAt75} hours to complete the trip at a speed of 75mph.`)


console.log("=== Road Trip at 55 mph ===");
console.log(`Gallons needed: ${gallonsAt55.toFixed(2)} gallons.`)
console.log(`Total fuel cost: $${costAt55.toFixed(2)}.`)
console.log(`Within $${fuelBudget} budget: ${budgetAt55} budget`)
console.log(`Trip duration ${durationAt55.toFixed(2)} hours.`)

console.log(`Result Comparison`)
console.log(`- 55 mph: Gallons needed: ${gallonsAt55}, Total cost: $${costAt55.toFixed(2)}, Within $${fuelBudget} budget: ${budgetAt55} budget, Total Duration: ${durationAt55.toFixed(2)} hours. `)


if (budgetAt75) {
    console.log("Recommendation: Drive 75mph. It's the fastest and fits the budget.");
  } else if (budgetAt60) {
    console.log("Recommendation: Drive 60mph. It's a good balance of speed and cost.");
  } else {
    console.log("Recommendation: Drive 55mph. It's the only option within budget.");
  }
