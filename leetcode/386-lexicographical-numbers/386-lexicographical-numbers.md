# Problem: 386. Lexicographical Numbers

## Problem Link:

[386. Lexicographical Numbers](https://leetcode.com/problems/lexicographical-numbers)

## Problem Description

Given an integer `n`, return all the numbers in the range `[1, n]` sorted in lexicographical order.

## Solution

### Solution Using Depth-First Search (DFS)

#### Approach Explanation

- We use a DFS approach to generate numbers in lexicographical order by building them digit by digit.
- Start with digits 1 through 9 as the first digit (since we can't start with 0).
- For each starting digit, recursively append digits 0 through 9 to build larger numbers.
- The DFS naturally generates numbers in lexicographical order because we explore smaller prefixes before larger ones.
- Add each number to the result array before exploring its children (pre-order traversal).
- Stop the recursion when the current number exceeds `n`.

#### Code

[386. Lexicographical Numbers](./386-lexicographical-numbers.js)

## Complexity Analysis

**Time Complexity:** O(n) - We generate exactly n numbers, and each number is processed once.

**Space Complexity:** O(log n) - The recursion stack depth is proportional to the number of digits in n, which is O(log n). The result array is not counted as auxiliary space.