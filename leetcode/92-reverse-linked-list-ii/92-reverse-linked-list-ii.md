# Problem: 92. Reverse Linked List II

## Problem Link:

[92. Reverse Linked List II](https://leetcode.com/problems/reverse-linked-list-ii)

## Problem Description

Given the `head` of a singly linked list and two integers `left` and `right` where `left <= right`, reverse the nodes of the list from position `left` to position `right`, and return the reversed list.

## Solution

### Solution Using In-Place Reversal

#### Approach Explanation

- We perform an in-place reversal using pointer manipulation to reverse only the portion between positions `left` and `right`.
- A dummy node is created to simplify edge cases, especially when the reversal starts at the head.
- We navigate to the node just before position `left` and then reverse the links only within the given range.
- For each node in the range, we remove it and insert it immediately after the `prev` pointer, effectively reversing the sublist.
- After the loop completes, the sublist is reversed in place and reconnected to the original list.
- This approach reverses the list in one pass without using extra memory.

#### Code

[92. Reverse Linked List II](./92-reverse-linked-list-ii.js)

## Complexity Analysis

**Time Complexity:** O(n) - The list is traversed once to reach the reversal point and perform the reversal.

**Space Complexity:** O(1) - Reversal is done in place using constant extra space with only a few pointers.