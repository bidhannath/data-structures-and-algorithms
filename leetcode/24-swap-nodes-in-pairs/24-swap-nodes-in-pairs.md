# Problem: 24. Swap Nodes in Pairs

## Problem Link:

[24. Swap Nodes in Pairs](https://leetcode.com/problems/swap-nodes-in-pairs)

## Problem Description

Given a linked list, swap every two adjacent nodes and return its head. You must solve the problem without modifying the values in the list's nodes (i.e., only nodes themselves may be changed).

## Solution

### Solution Using Iterative Pointer Manipulation

#### Approach Explanation

- We use an iterative pointer-based approach to swap nodes in pairs without changing node values.
- A dummy node is created to simplify edge cases, especially when the head itself changes.
- Use two pointers: `prev` to track the node before the current pair, and `curr` to point to the first node of the current pair.
- While there are at least two nodes available, we swap them by updating pointers.
- After swapping, move `prev` and `curr` forward to process the next pair.
- This approach performs swaps in a single pass without recursion.

#### Code

[24. Swap Nodes in Pairs](./24-swap-nodes-in-pairs.js)

## Complexity Analysis

**Time Complexity:** O(n) - Each node is visited once during the traversal.

**Space Complexity:** O(1) - The swaps are done in place using constant extra space.