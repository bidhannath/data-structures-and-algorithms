# Problem: 45. Jump Game II

## Problem Link:

[45. Jump Game II](https://leetcode.com/problems/jump-game-ii)

## Problem Description

You are given a 0-indexed array of integers `nums` of length `n`. You are initially positioned at `nums[0]`.

Each element `nums[i]` represents the maximum length of a forward jump from index `i`. In other words, if you are at `nums[i]`, you can jump to any `nums[i + j]` where:
- `0 <= j <= nums[i]` and 
- `i + j < n`

Return the minimum number of jumps to reach `nums[n - 1]`.

## Solution

### Solution Using Greedy Approach

#### Approach Explanation

- We use a greedy strategy similar to Breadth-First Search (BFS) over ranges to find the minimum number of jumps.
- The key insight is to think of the array as levels where all positions reachable with the same number of jumps form a level.
- We maintain two pointers `l` and `r` that define the current range reachable with the current number of jumps.
- For all indices between `l` and `r`, we compute the farthest index we can reach in the next jump.
- We then move to the next range and increment the jump count.
- This guarantees the minimum number of jumps since each expansion represents one optimal jump.

#### Code

[45. Jump Game II](./45-jump-game-two.js)

## Complexity Analysis

**Time Complexity:** O(n) - Each index is processed at most once during the range expansions.

**Space Complexity:** O(1) - Only constant extra space is used for the pointers and variables.