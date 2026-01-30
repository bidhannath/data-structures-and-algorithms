# Problem: 347. Top K Frequent Elements

## Problem Link:

[347. Top K Frequent Elements](https://leetcode.com/problems/top-k-frequent-elements)

## Problem Description

Given an integer array `nums` and an integer `k`, return the `k` most frequent elements. You may return the answer in any order.

## Solution

### Solution Using Min Heap

#### Approach Explanation

- We use a frequency map to count how often each number appears in the array.
- Implement a min heap of size `k` where elements are ordered by their frequency.
- Iterate through the frequency map and push each number into the heap.
- If the heap size exceeds `k`, remove the element with the smallest frequency.
- This ensures we only keep the most frequent elements seen so far.
- After processing all elements, the heap contains the `k` most frequent numbers.

#### Code

[347. Top K Frequent Elements](./347-top-k-frequent-elements.js)

## Complexity Analysis

**Time Complexity:** O(n log k) - Building the frequency map takes O(n). Each heap operation takes O(log k), performed for each unique element.

**Space Complexity:** O(n + k) - The frequency map stores up to n elements, and the heap stores at most k elements.