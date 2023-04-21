---
title: Sharding & its Types?
sidebar_position: 2
---

# What is Sharding?

Sharding is a scaling solution to increase parallel processing to achieve higher transaction throughput and overall performance. It involves breaking the network into smaller, more manageable pieces called "shards." Each shard processes a portion of the network's transactions independently, thus allowing for parallel processing and increasing the network's overall capacity.

Sharding helps solve some of the performance challenges that larger blockchain networks, like Ethereum, face as they grow.

# What are the different types of Sharding?

1. **Network Sharding:** This type of sharding focuses on dividing the nodes in the network into smaller groups, each responsible for a specific set of transactions. This allows for faster data propagation across the network and reduces the overall communication load.
2. **Transaction Sharding:** This approach involves dividing the transaction pool into smaller groups and assigning them to different shards. Each shard then processes its own set of transactions independently, thereby increasing the overall throughput of the network.
3. **Data Sharding:** In data sharding, the actual data stored on the blockchain is partitioned into smaller pieces, with each shard responsible for storing and maintaining a part of the data. This helps alleviate the storage burden on individual nodes and enables faster data access and retrieval.
4. **State Sharding:** State sharding involves dividing the blockchain's state (account balances, smart contract data, etc.) into separate segments, with each shard maintaining a portion of the overall state. This helps reduce storage and computational requirements for individual nodes, making it easier for them to participate in the network.

Shardeum implements a 3-dimensional sharding approach - State, Network, and Transactions.

<iframe width="800" height="480" src="https://www.youtube.com/embed/SZpjvWMfgDA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>