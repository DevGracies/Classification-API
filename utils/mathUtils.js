const isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) return false;
  }
  return true;
};
const isPerfect = (num) => {
  let sum = 1;
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) sum += i + (i !== num / i ? num / i : 0);
  }
  return sum === num && num !== 1;
};
const isArmStrong = (num) => {
  const digits = num.toString().split("").map(Number);
  return digits.reduce((sum, d) => sum + d ** digits.length, 0) === num;
};
const getDigitSum = (num) => {
  return num
    .toString()
    .split("")
    .reduce((sum, d) => sum + parseInt(d), 0);
};

module.exports = { isPrime, isArmStrong, isPerfect, getDigitSum };
