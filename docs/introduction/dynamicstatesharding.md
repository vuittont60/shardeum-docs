---
title: Dynamic State Sharding
sidebar_position: 3
---

export const DynamicTable=()=>(
<table>
<tr><th>Static Sharding</th><th>Dynamic Sharding</th></tr>
<tr><td>Shardeum Pre-exist</td><td>One Dynamic shard is foprmed in real-time for every transaction</td></tr>
<tr><td>Shards address space is pre-determined </td><td>  Shards address space is the transaction access list</td></tr>
<tr><td>Possible for one shard to not have complete transaction state</td><td> Dynamic Shard has complete transaction State</td></tr>
<tr><td>Transactions involving accounts on multiple Shards are processed asynchronously across shards</td><td>  Dynamic shards process transaction atomically</td></tr>
<tr><td> Not composable in cross shard transactions</td><td>Atomic composability</td></tr>
<tr><td>Dosen't require access list</td><td>Require access list </td></tr>
</table>
    );

# Dynamic State Sharding

There are two types of State Sharding - **Static State Sharding** & **Dynamic State Sharding**.

<DynamicTable />

The most general approach to sharding is to divide the address space of accounts into multiple fixed-size regions called shards, and nodes in the network are assigned to different shards.

In a dynamic state sharding system like Shardeum, shards can be reorganized to adapt to changes in network conditions. This may involve splitting or merging shards, adding or removing nodes from shards, or reassigning nodes to different shards. Reorganization can help maintain an optimal balance between the system's load and resources, ensuring that the network operates efficiently and securely. Shard reorganization can be carried out through various algorithms that respond to changes in real time.

In Shardeum, each validator covers a unique range of addresses and only needs to execute the transactions it is assigned to and store the respective state changes. Although each validator covers a unique range, some validators also cover the same addresses in the sense of overlap, thus adding a level of redundancy. This ensures that every address in Shardeum has the required redundancy of at least 128 validators.

Compared to Static State Sharding, Dynamic State Sharding allows for the number of shards and their composition to change dynamically based on network conditions. This adaptability enables Dynamic State Sharding to better optimize the system's performance and resource allocation making it much more efficient.