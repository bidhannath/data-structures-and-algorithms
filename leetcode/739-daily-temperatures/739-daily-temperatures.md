# Problem: 739. Daily Temperatures

## Problem Link:

[739. Daily Temperatures](https://leetcode.com/problems/daily-temperatures)

## Problem Description

Given an array of integers `temperatures` represents the daily temperatures, return an array `answer` such that `answer[i]` is the number of days you have to wait after the `i`-th day to get a warmer temperature. If there is no future day for which this is possible, keep `answer[i] == 0` instead.

## Solution

### Approach Explanation

For each day, we need to find how many days we must wait until a warmer temperature occurs.

A brute-force approach would compare each day with all future days, leading to an O(n²) solution.

Instead, we can observe that:
- We only care about finding the **next greater temperature**.
- This is a classic **Next Greater Element** problem.

A **monotonic decreasing stack** helps efficiently track indices of temperatures that are still waiting for a warmer day.

1. Initialize:
   - A `stack` to store indices of unresolved temperatures.
   - A `result` array filled with `0` (default if no warmer day exists).
2. Traverse the array from left to right.
3. For each temperature:
   - While the stack is not empty and the current temperature is greater than the temperature at the index on top of the stack:
     - Pop the index.
     - Compute the difference in days (`currentIndex - poppedIndex`).
     - Store it in `result[poppedIndex]`.
4. Push the current index onto the stack.
5. After traversal, any remaining indices in the stack have no warmer future day (remain 0).

This ensures each element is pushed and popped at most once.

### Code

[739. Daily Temperatures](./739-daily-temperatures.js)

## Complexity Analysis

- **Time complexity:** O(n), where n is the length of the temperatures array. Each index is pushed and popped at most once.
- **Space complexity:** O(n), due to the stack and result array.