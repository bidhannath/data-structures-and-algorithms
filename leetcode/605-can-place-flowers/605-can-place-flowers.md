# Problem: 605. Can Place Flowers

## Problem Link:

[605. Can Place Flowers](https://leetcode.com/problems/can-place-flowers)

## Problem Description

You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.

Given an integer array `flowerbed` containing `0`'s and `1`'s, where `0` means empty and `1` means not empty, and an integer `n`, return `true` if `n` new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and `false` otherwise.

## Solution

### Solution Using Greedy Approach

#### Approach Explanation

- We use a greedy strategy to plant flowers as early as possible in the flowerbed.
- Traverse the flowerbed from left to right and at each position, check if we can plant a flower.
- A flower can be planted at position `i` if all three conditions are met:
  - The current position is empty (`flowerbed[i] === 0`)
  - The left neighbor is empty or doesn't exist (at the start)
  - The right neighbor is empty or doesn't exist (at the end)
- When we find a valid position, we plant a flower and decrease the count `n`.
- If `n` becomes `0` at any point, we can return `true` immediately.
- This greedy approach works because planting earlier never reduces the number of flowers we can place later.

#### Code

[605. Can Place Flowers](./605-can-place-flowers.js)

## Complexity Analysis

**Time Complexity:** O(n) - The flowerbed is traversed once, where n is the length of the flowerbed array.

**Space Complexity:** O(1) - The solution modifies the array in place without using extra space.