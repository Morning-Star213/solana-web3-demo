# Durable Nonce

We need to pack a recent blockhash into our tx. If the blockhash is expired, our tx will be rejected. (aprox. 2 min).
If you want to get rid of it, you can use durable nonce. Durable nonce has no valid time.

## Mechanism

You will need to create a nonce account previously. After you created, there is a `nonce` will store in the account.
Then we can trigger this mechanism by

1. use the `nonce` as a recent blockhash
2. put `nonce advance` in the first instruciton in this tx

Here I seperate to 3 step to guide to use it.

* [Create Nonce Account](./create-nonce-account.md)
* [Get Nonce Account](./query-nonce.md)
* [Use Nonce](./use-nonce.md)