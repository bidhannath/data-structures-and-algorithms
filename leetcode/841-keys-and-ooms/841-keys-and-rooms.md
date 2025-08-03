# Problem: 841. Keys and Rooms

## Problem Link:

[841. Keys and Rooms](https://leetcode.com/problems/keys-and-rooms/description/)

## Problem Description

There are `n` rooms labeled from `0` to `n - 1` and all the rooms are locked except for room `0`. Your goal is to visit all the rooms. However, you cannot enter a locked room without having its key.

When you visit a room, you may find a set of distinct keys in it. Each key has a number on it, denoting which room it unlocks, and you can take all of them with you to unlock the other rooms.

Given an array `rooms` where `rooms[i]` is the set of keys that you can obtain if you visited room `i`, return `true` if you can visit all the rooms, or `false` otherwise.

## Solutions

There can be two approaches to solve this problem which are listed below.

### 1. Solution Using DFS (Depth-First Search)

#### Approach Explanation

- Start from room 0.
- Use a set or boolean array to keep track of visited rooms.
- For each room, collect all keys and visit the corresponding rooms if not already visited.
- If all rooms are visited, return `true`; otherwise, return `false`.

#### Code

[841. Keys and Rooms](./841-keys-and-rooms.js)

## Complexity Analysis

Both DFS and BFS solutions have a time complexity of **O(n + k)**, where `n` is the number of rooms and `k` is the total number of keys across all rooms.  
The space complexity is **O(n)**, due to the storage required for the visited rooms and the recursion stack or queue.