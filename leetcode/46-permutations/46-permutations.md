# Problem: 46. Permutations

## Problem Link:

[46. Permutations](https://leetcode.com/problems/permutations)

## Problem Description

Given an array `nums` of distinct integers, return all the possible permutations. You can return the answer in any order.

## Solution

### Solution Using Backtracking

#### Approach Explanation

- We use backtracking to generate all permutations by exploring every possible ordering of the given numbers.
- Each number is used exactly once in a permutation using a `visited` array to track which elements have already been used.
- We build permutations incrementally in the `solution` array and undo choices to explore other possibilities.
- When the length of `solution` equals the input array length, we have a complete permutation.
- After each recursive call, we backtrack by removing the last element and marking it as unvisited.

#### Code

[46. Permutations](./46-permutations.js)

## Complexity Analysis

**Time Complexity:** O(n × n!) - There are n! permutations, and each permutation takes O(n) time to construct and copy.

**Space Complexity:** O(n!) - Space is used to store all permutations. The recursion stack and auxiliary arrays (solution, visited) take O(n) space.