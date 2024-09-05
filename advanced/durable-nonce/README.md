# DurableNonce

When Solana sends a transaction, it will include a recent blockhash in tx and then sign it together. If the blockhash is too far from the latest block on the chain, the tx will be rejected. (It will expire approximately two minutes after getting it.) This mechanism makes it impossible for us to keep the tx locally for a while and then send it out. The official solution is called durable nonce.

## Mechanism

This durable nonce will require you to create a nonce account first. After the nonce account is created, there will also be a nonce in it. We only need to make tx meet the following conditions to activate the nonce mechanism

1. Put the nonce in the blockhash (there is no need to put the latest blockhash)
2. The first instruction of tx is the operation of advanced nonce

If the above two conditions are met, the durable nonce mechanism can be started. The following will be divided into several steps to take you step by step.

- [Create nonce account](../durable-nonce/create-nonce-account/main.ts)
- [Query the nonce of nonce account](../durable-nonce/query-nonce/main.ts)
- [Use nonce mechanism](../durable-nonce/use-nonce/main.ts)
