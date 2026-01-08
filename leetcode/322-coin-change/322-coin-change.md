# Problem: 322. Coin Change

## Problem Link:

[322. Coin Change](https://leetcode.com/problems/coin-change)

## Problem Description

You are given an integer array `coins` representing coins of different denominations and an integer `amount` representing a total amount of money.

Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return `-1`.

You may assume that you have an infinite number of each kind of coin.

## Solution

### Solution Using Dynamic Programming

#### Approach Explanation

- We use a **bottom-up dynamic programming** approach to find the minimum number of coins needed.
- The key insight is that the minimum coins needed for an amount depends on smaller amounts that we can build up from.
- We create a `memo` array where `memo[i]` represents the minimum coins needed to make amount `i`.
- For each amount from 1 to the target amount, we try every coin and take the minimum result.
- If we can't make the target amount, we return -1.

#### Code

[322. Coin Change](./322-coin-change.js)

## Complexity Analysis

**Time Complexity:** O(amount × n) - Where n is the number of coin denominations. We iterate through each amount and for each amount, we check all coins.

**Space Complexity:** O(amount) - We use a DP array of size amount + 1 to store the minimum coins needed for each amount.