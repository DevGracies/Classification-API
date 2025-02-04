const axios = require("axios");
const {
  isArmStrong,
  isPerfect,
  isPrime,
  getDigitSum,
} = require("../utils/mathUtils");

const classifyNumber = async (req, res) => {
  const num = req.query.number;
  if (!num || isNaN(num)) {
    return res.status(400).json({ number: num, error: true });
  }
  const number = parseInt(num);
  let properties = [];

  const armstrong = isArmStrong(number);
  const even = number % 2 === 0;

  if (armstrong) {
    properties.push("armstrong");
  }
  properties.push(even ? "even" : "odd");

  try {
    const funFact = await axios.get(
      ` http://numbersapi.com/${number}/math?json`
    );
    res.json({
      number,
      is_prime: isPrime(number),
      is_perfect: isPerfect(number),
      properties,
      digit_sum: getDigitSum(number),
      fun_fact: funFact.data.text,
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch fun facts" });
  }
};

module.exports = { classifyNumber };
