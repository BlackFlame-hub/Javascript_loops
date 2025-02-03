function summation() {
  let number = Number(prompt("Insert the best number to sum it up."));
  if (isNaN(number) || number <= 0) {
    return "Please enter an actual integer number.";
  }

  let sum = 0;
  for (let i = 1; i <= number; i++) {
    sum += i;
  }
  alert(`The summation from 1 to ${number} is ${sum}`);
  return sum;
}

summation();

// ====================================================================

function divisor(a, b) {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

const num1 = parseInt(prompt("enter first number to check largest divisor:"));
const num2 = parseInt(
  prompt("Enter second number number to check largest divisor:")
);
if (!isNaN(num1) && !isNaN(num2) && num1 > 0 && num2 > 0) {
  alert(`The larget common divisor is: ${divisor(num1, num2)}`);
} else {
  alert("Please enter a valid positive number.");
}

// ====================================================================

function allDivisors(n) {
  let divisors = [];
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      divisors.push(i);
    }
  }
  return divisors;
}
const numDiv = parseInt(prompt("Enter THE number to display all divisors:"));
if (!isNaN(numDiv) && numDiv > 0) {
  alert(`Divisors of ${numDiv} are: ${allDivisors(numDiv).join(", ")}`);
} else {
  alert("Please enter a valid positive number.");
}

// ====================================================================

const inputNumber = prompt("Enter a number to see how many digits it has:");
if (!isNaN(inputNumber)) {
  alert(`The number ${inputNumber} has ${inputNumber.length} digits.`);
} else {
  alert("Please enter a valid number.");
}

// ====================================================================

let count = { positives: 0, negatives: 0, zeros: 0, evens: 0, odds: 0 };

for (let i = 0; i < 10; i++) {
  let num = parseInt(
    prompt(`Enter number to track and categorize it (#${i + 1}):`)
  );
  if (!isNaN(num)) {
    if (num > 0) count.positives++;
    else if (num < 0) count.negatives++;
    else count.zeros++;

    if (num % 2 === 0) count.evens++;
    else count.odds++;
  } else {
    alert("Invalid input, enter a numerical value.");
    i--;
  }
}

alert(
  `Positives: ${count.positives}, Negatives: ${count.negatives}, Zeros: ${count.zeros}, Evens: ${count.evens}, Odds: ${count.odds}`
);

// ====================================================================

const favFruit = prompt("Enter your favorite fruit:").toLowerCase();
if (
  ["peach", "banana", "strawberry", "pineapple", "orange"].includes(favFruit)
) {
  alert("It is your favorite fruit.");
} else if (["pear", "apple", "grapefruit"].includes(favFruit)) {
  alert("Ewww.");
} else {
  alert("Now that's a new fruit to try.");
}

// ====================================================================

const numberType = parseInt(prompt("Enter a lucky number:"));
switch (true) {
  case numberType === 0:
    alert("The number is zero.");
    break;
  case numberType % 2 === 0:
    alert("The number is even.");
    break;
  case numberType % 2 !== 0:
    alert("This is an odd number.");
    break;
  default:
    alert(
      "Invalid input by the user, even though it was clearly requested a number."
    );
}
