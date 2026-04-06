const { add, subtract, multiply, divide, calculate } = require('../calculator');

describe('Calculator Functions', () => {
  
  describe('Addition', () => {
    test('should add two positive numbers', () => {
      expect(add(2, 3)).toBe(5);
    });

    test('should add two negative numbers', () => {
      expect(add(-5, -3)).toBe(-8);
    });

    test('should add a positive and negative number', () => {
      expect(add(10, -4)).toBe(6);
    });

    test('should add zero to a number', () => {
      expect(add(42, 0)).toBe(42);
    });

    test('should add decimal numbers', () => {
      expect(add(1.5, 2.5)).toBe(4);
    });

    test('should handle very large numbers', () => {
      expect(add(1000000, 2000000)).toBe(3000000);
    });
  });

  describe('Subtraction', () => {
    test('should subtract two positive numbers', () => {
      expect(subtract(10, 4)).toBe(6);
    });

    test('should subtract a larger number from a smaller number', () => {
      expect(subtract(5, 10)).toBe(-5);
    });

    test('should subtract negative numbers', () => {
      expect(subtract(5, -3)).toBe(8);
    });

    test('should subtract zero from a number', () => {
      expect(subtract(42, 0)).toBe(42);
    });

    test('should subtract a number from zero', () => {
      expect(subtract(0, 5)).toBe(-5);
    });

    test('should subtract decimal numbers', () => {
      expect(subtract(10.5, 3.2)).toBeCloseTo(7.3, 5);
    });

    test('should subtract the same number from itself', () => {
      expect(subtract(100, 100)).toBe(0);
    });
  });

  describe('Multiplication', () => {
    test('should multiply two positive numbers', () => {
      expect(multiply(45, 2)).toBe(90);
    });

    test('should multiply by zero', () => {
      expect(multiply(100, 0)).toBe(0);
    });

    test('should multiply by one', () => {
      expect(multiply(42, 1)).toBe(42);
    });

    test('should multiply two negative numbers', () => {
      expect(multiply(-5, -3)).toBe(15);
    });

    test('should multiply a positive and negative number', () => {
      expect(multiply(6, -7)).toBe(-42);
    });

    test('should multiply decimal numbers', () => {
      expect(multiply(2.5, 4)).toBe(10);
    });

    test('should multiply very large numbers', () => {
      expect(multiply(1000, 1000)).toBe(1000000);
    });

    test('should multiply very small numbers', () => {
      expect(multiply(0.1, 0.1)).toBeCloseTo(0.01, 5);
    });
  });

  describe('Division', () => {
    test('should divide two positive numbers', () => {
      expect(divide(20, 5)).toBe(4);
    });

    test('should divide and return a decimal', () => {
      expect(divide(10, 3)).toBeCloseTo(3.333, 3);
    });

    test('should divide one by a number', () => {
      expect(divide(1, 2)).toBe(0.5);
    });

    test('should divide by one', () => {
      expect(divide(42, 1)).toBe(42);
    });

    test('should divide zero by a number', () => {
      expect(divide(0, 5)).toBe(0);
    });

    test('should divide negative numbers', () => {
      expect(divide(-20, -5)).toBe(4);
    });

    test('should divide a positive by a negative number', () => {
      expect(divide(20, -5)).toBe(-4);
    });

    test('should divide decimal numbers', () => {
      expect(divide(10.5, 2.1)).toBeCloseTo(5, 5);
    });

    test('should throw error when dividing by zero', () => {
      expect(() => divide(20, 0)).toThrow('Cannot divide by zero');
    });

    test('should throw error with correct error message', () => {
      expect(() => divide(100, 0)).toThrow(Error);
    });
  });

  describe('Calculate Function', () => {
    test('should calculate addition correctly', () => {
      expect(calculate(2, '+', 3)).toBe(5);
    });

    test('should calculate subtraction correctly', () => {
      expect(calculate(10, '-', 4)).toBe(6);
    });

    test('should calculate multiplication correctly', () => {
      expect(calculate(45, '*', 2)).toBe(90);
    });

    test('should calculate division correctly', () => {
      expect(calculate(20, '/', 5)).toBe(4);
    });

    test('should throw error for unsupported operator', () => {
      expect(() => calculate(10, '%', 3)).toThrow('Unsupported operator: %');
    });

    test('should throw error for division by zero through calculate', () => {
      expect(() => calculate(20, '/', 0)).toThrow('Cannot divide by zero');
    });
  });

  describe('Edge Cases', () => {
    test('should handle operations with negative results', () => {
      expect(subtract(5, 10)).toBe(-5);
    });

    test('should handle operations with very small decimal results', () => {
      expect(divide(1, 1000000)).toBeCloseTo(0.000001, 6);
    });

    test('should handle operations with infinity-like results', () => {
      expect(multiply(999999, 999999)).toBe(999998000001);
    });

    test('should maintain precision for common operations', () => {
      expect(add(0.1, 0.2)).toBeCloseTo(0.3, 5);
    });
  });

  describe('Integration Tests - Examples from Image', () => {
    test('Example 1: 2 + 3 = 5', () => {
      expect(calculate(2, '+', 3)).toBe(5);
    });

    test('Example 2: 10 - 4 = 6', () => {
      expect(calculate(10, '-', 4)).toBe(6);
    });

    test('Example 3: 45 * 2 = 90', () => {
      expect(calculate(45, '*', 2)).toBe(90);
    });

    test('Example 4: 20 / 5 = 4', () => {
      expect(calculate(20, '/', 5)).toBe(4);
    });
  });
});
