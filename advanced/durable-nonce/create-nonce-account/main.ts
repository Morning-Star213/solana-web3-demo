import {
  Keypair,
  Transaction,
  SystemProgram,
  NONCE_ACCOUNT_LENGTH,
} from "@solana/web3.js";
import { CONNECTION, FEE_PAYER } from "../../../helper/const";

async function main() {
  let nonceAccount = Keypair.generate();
  console.log(`nonce account: ${nonceAccount.publicKey.toBase58()}`);

  let tx = new Transaction();
  tx.add(
    SystemProgram.createAccount({
      fromPubkey: FEE_PAYER.publicKey,
      newAccountPubkey: nonceAccount.publicKey,
      lamports: await CONNECTION.getMinimumBalanceForRentExemption(
        NONCE_ACCOUNT_LENGTH
      ),
      space: NONCE_ACCOUNT_LENGTH,
      programId: SystemProgram.programId,
    }),

    SystemProgram.nonceInitialize({
      noncePubkey: nonceAccount.publicKey,
    })
  );
  tx.feePayer = FEE_PAYER.publicKey;

  console.log(
    `txhash: ${await CONNECTION.sendTransaction(tx, [nonceAccount, FEE_PAYER])}`
  );
}

main().then(
  () => process.exit(),
  (err) => {
    console.error(err);
    process.exit(-1);
  }
);
