const fizzbuzz = (number) => {
  if (number % 15 === 0) {
    return "fizzbuzz";
  } else if (number % 3 === 0) {
    return "fizz";
  } else if (number % 5 === 0) {
    return "buzz";
  } else {
    return number;
  }
};

// for (let num = 1; num < 51; num++) {
//   console.log(`My number is ${num} and fizzbuzz returns ${fizzbuzz(num)}`);
// }

module.exports = fizzbuzz;