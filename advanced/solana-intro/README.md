#

## Start

First of all, if you want to develop Solana, it is highly recommended to install Solana's cli tool locally. It can start local nodes and wrap many convenient functions, making development faster.

You can refer to the previous articles [here](https://docs.solana.com/cli) and experience Solana first without writing any code.

If you have installed the cli tool, you can use it locally.


```
solana-test-validator
```

To start a test node to speed up the development process (currently not supported on Windows)

[Official explorer](https://explorer.solana.com/) can specify a custom URL

In other words, you can specify http://localhost:8899 to correspond to the local node to facilitate viewing transaction information.


## World view

### Overview

Solana and Ethereum are different in design concept.

On Ethereum, everyone puts all the information into the contract. After the interaction between the account and the contract is completed, the contract will store the corresponding results in itself. But in Solana's contract (officially called program, and will also be called program below), there is only the logical part, and the place where the data is stored is the account.

### Account

Solana's Account has several important concepts

#### Owner

The owner of an account is usually a certain program. Generally, the most basic accounts we hold belong to the system program. And when only the account belongs to a certain program, this program can write data into it. If you violate this rule, the transaction will directly fail. But there is no such restriction on reading. As long as you do not modify the data inside, you can read any account you want.

#### Rent

As mentioned earlier, the account is used to store data, and your account will also be charged a "data management fee" due to the different data stored. The time to collect is

1. Your account is included in the transaction
2. End of each epoch

The currencies are all native tokens SOL. If the money is deducted until there is no more, all the data will disappear!

The government has another way to waive rent, which is that you give enough rent for two years in this account from the beginning. In this way, your account will be marked as a rent-free account, and no money will be charged from you from now on.

#### Program Derived Address

Everyone knows that when doing tx, you can sign it through its private key to achieve authorization. In Solana, not only ordinary private keys can be signed, but Programs can also be signed. This kind of account that can only be authorized by Program signature is officially called Program Derived Address.

The advantage of this kind of Account is that only Program can sign it. This means that relevant authorizations can only be triggered through Program conditions.

### Transaction

Solana's Tx structure is relatively different and can contain a lot of instructions.

The same Tx can perform such troublesome operations as A transferring money to B, B transferring money to C, and C transferring money to A.

---
For more detailed information, it is recommended that you take some time to read these two articles.

1. https://docs.solana.com/developing/programming-model/accounts
2. https://docs.solana.com/developing/programming-model/calling-between-programs

