const { sum, multiply, divide, isPrime, factorial } = require('../src/math');

/**
 * SUM
 */
test('[VALID] 1 + 2 = 3', () => {
  const result = sum(1, 2);
  expect(result).toBe(3);
});

test('[INVALID] 1 + 2 ≠ 4', () => {
  const result = sum(1, 2);
  expect(result).not.toBe(4);
});

/**
 * MULTIPLY
 */
test('[VALID] 4 x 2 = 8', () => {
  const result = multiply(4, 2);
  expect(result).toBe(8);
});

/**
 * DIVIDE
 */
test('[VALID] 4 ÷ 2 = 2', () => {
  const result = divide(4, 2);
  expect(result).toBe(2);
});

test('[INVALID] 4 ÷ 2 ≠ 2', () => {
  const result = divide(4, 2);
  expect(result).not.toBe(8);
});

test('[INVALID] 4 ÷ 0 throw Error', () => {
  try {
    const result = divide(4, 0);
  } catch(err) {
    expect(err.message).toBe('You cannot divide by zero');
  }
});

/**
 * IS PRIME
 */
test('[INVALID] 1 is prime', () => {
    const result = isPrime(1);
    expect(result).toBeFalsy();
});

test('[VALID] 2 is prime', () => {
    const result = isPrime(2);
    expect(result).toBeTruthy();
});

test('[VALID] 342 is prime', () => {
    const result = isPrime(342);
    expect(result).toBeFalsy();
});

test('[VALID] 23 is prime', () => {
    const result = isPrime(23);
    expect(result).toBeTruthy();
});

/**
 * FACTORIAL
 */
test('[INVALID] -4!', () => {
  const result = factorial(-4);
  expect(result).toBe(-1);
});

test('[VALID] 0!', () => {
  const result = factorial(0);
  expect(result).toBe(1);
});

test('[VALID] 5!', () => {
  const result = factorial(5);
  expect(result).toBe(120);
});