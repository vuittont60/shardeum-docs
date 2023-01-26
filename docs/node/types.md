---
title: Types
sidebar_position: 1
---

# Node Types

## Validator

### Active

These nodes validate the transactions in the network by participating in the consensus. They will have to stake SHM to be able to participate. Shardeum will reward them with SHM for participating (network rewards will come from predefined SHM emissions, and the transaction fees earned). Validator nodes don't store the whole history, so they are lightweight.

### Standby

These are validator nodes standing by in the network and not currently participating in consensus. Standby nodes help scale the Shardeum network quicker in times of traffic spikes. They may or may not need to stake SHM, but they may also earn a portion of the network rewards.

## RPC

These nodes are able to access the EVM Based JSON RPC interface that is used to read and write data on the Shardeum blockchain.
Wallets must be connected to an RPC URL to interact with blockchains for example. 

Public Shardeum RPC URL endpoints:

[Shardeum Endpoints](/Network/Endpoints)

Read RPC method example:

[eth_chainId RPC method](https://www.quicknode.com/docs/ethereum/eth_chainId)

Write to a blockchain example:

[eth_sendRawTransaction RPC method](https://www.quicknode.com/docs/ethereum/eth_sendRawTransaction)

## Archive

Archive nodes maintain the entire transaction history. Archive nodes may or may not have to stake SHM, but they will earn a portion of the network reward to motivate and incentivize for storing historical data.

:::info
Network node reward schedule is work in progress in collaboration with the community and will be finalized/announced in the next few months.
:::