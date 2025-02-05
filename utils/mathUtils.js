const isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2; i * i <= Math.abs(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};
const isPerfect = (num) => {
  let sum = 1;
  for (let i = 2; i * i <= Math.abs(num); i++) {
    if (num % i === 0) sum += i + (i !== num / i ? num / i : 0);
  }
  return sum === Math.abs(num) && num !== 1;
};
const isArmStrong = (num) => {
  const digits = Math.abs(num).toString().split("").map(Number);
  return (
    digits.reduce((sum, d) => sum + d ** digits.length, 0) === Math.abs(num)
  );
};
const getDigitSum = (num) => {
  return Math.abs(num)
    .toString()
    .split("")
    .reduce((sum, d) => sum + parseInt(d), 0);
};

module.exports = { isPrime, isArmStrong, isPerfect, getDigitSum };
