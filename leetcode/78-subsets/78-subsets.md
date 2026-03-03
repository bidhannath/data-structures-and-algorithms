# Problem: 78. Subsets

## Problem Link:

[78. Subsets](https://leetcode.com/problems/subsets)

## Problem Description

Given an integer array `nums` of unique elements, return all possible subsets (the power set).

The solution set must not contain duplicate subsets. You may return the solution in any order.

## Solution

### Solution Using Backtracking (DFS)

#### Approach Explanation

To generate all subsets (the power set), we need to explore every possible combination of elements.

For each element, we have two choices:
- Include it in the current subset
- Exclude it from the current subset

This naturally leads to a **backtracking (DFS)** approach where we build subsets incrementally and explore all possible combinations.

**Algorithm:**

We use a recursive backtracking strategy:

1. Maintain:
   - `solution` → current subset being built
   - `subsets` → list of all subsets
2. Start recursion from index `0`.
3. At each recursive call:
   - Add the current `solution` to the result.
4. Iterate from `startIndex` to the end of the array:
   - Include the current element.
   - Recurse with `i + 1` to avoid reusing previous elements.
   - Backtrack by removing the element.

This ensures:
- No duplicate subsets
- All combinations are explored
- Elements are considered only once per branch

#### Code

[78. Subsets](./78-subsets.js)

## Complexity Analysis

**Time Complexity:** $O(n \cdot 2^n)$  
There are $2^n$ subsets, and copying each subset takes up to $O(n)$ time.

**Space Complexity:** $O(n \cdot 2^n)$  
The result stores all subsets. The recursion stack uses up to $O(n)$ space.
