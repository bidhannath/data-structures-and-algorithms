/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  const len = temperatures.length;
  const stack = [], result = new Array(len).fill(0);
  for (let i = 0; i < len; i++) {
    while (stack.length > 0 && temperatures[i] > temperatures[stack[stack.length - 1]]) {
      const index = stack.pop();
      result[index] = i - index;
    }
    stack.push(i);
  }
  return result;
};