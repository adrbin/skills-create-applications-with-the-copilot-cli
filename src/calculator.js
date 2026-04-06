#!/usr/bin/env node

/**
 * Simple Node.js CLI Calculator
 * Supports four basic arithmetic operations: Addition, Subtraction, Multiplication, and Division
 */

// Addition: adds two numbers
function add(a, b) {
  return a + b;
}

// Subtraction: subtracts the second number from the first
function subtract(a, b) {
  return a - b;
}

// Multiplication: multiplies two numbers
function multiply(a, b) {
  return a * b;
}

// Division: divides the first number by the second
function divide(a, b) {
  if (b === 0) {
    throw new Error('Cannot divide by zero');
  }
  return a / b;
}

// Modulo: returns the remainder of a divided by b
function modulo(a, b) {
  if (b === 0) {
    throw new Error('Cannot perform modulo by zero');
  }
  return a % b;
}

// Power: returns base raised to the exponent
function power(base, exponent) {
  return Math.pow(base, exponent);
}

// Square Root: returns the square root of n
function squareRoot(n) {
  if (n < 0) {
    throw new Error('Cannot calculate square root of negative number');
  }
  return Math.sqrt(n);
}

// Main calculator function that accepts operands and operator
function calculate(operand1, operator, operand2) {
  switch (operator) {
    case '+':
      return add(operand1, operand2);
    case '-':
      return subtract(operand1, operand2);
    case '*':
      return multiply(operand1, operand2);
    case '/':
      return divide(operand1, operand2);
    case '%':
      return modulo(operand1, operand2);
    case '^':
      return power(operand1, operand2);
    case 'sqrt':
      return squareRoot(operand1);
    default:
      throw new Error(`Unsupported operator: ${operator}`);
  }
}

// Export functions for testing
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    add,
    subtract,
    multiply,
    divide,
    modulo,
    power,
    squareRoot,
    calculate
  };
}

// CLI entry point
if (require.main === module) {
  const args = process.argv.slice(2);

  if (args.length !== 3) {
    console.error('Usage: calculator <operand1> <operator> <operand2>');
    console.error('Operators: + (addition), - (subtraction), * (multiplication), / (division), % (modulo), ^ (power)');
    console.error('Special operators: sqrt <number> (square root)');
    process.exit(1);
  }

  const operand1 = parseFloat(args[0]);
  const operator = args[1];
  const operand2 = parseFloat(args[2]);

  if (isNaN(operand1) || isNaN(operand2)) {
    console.error('Error: Operands must be valid numbers');
    process.exit(1);
  }

  try {
    const result = calculate(operand1, operator, operand2);
    console.log(`${operand1} ${operator} ${operand2} = ${result}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
}
