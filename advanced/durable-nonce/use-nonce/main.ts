import {
  Keypair,
  Transaction,
  SystemProgram,
  Connection,
  NONCE_ACCOUNT_LENGTH,
  sendAndConfirmTransaction,
  PublicKey,
  NonceAccount,
} from "@solana/web3.js";
import { CONNECTION, FEE_PAYER } from "../../../helper/const";

const nonceAccountPubkey = new PublicKey(
  "2ZKe8GmRAqFRj3AvVSFBTLHNNrH1uB23hwjHV3CzJGmf"
);

async function main() {
  let to = Keypair.generate();

  let tx = new Transaction();
  tx.add(
    SystemProgram.nonceAdvance({
      noncePubkey: nonceAccountPubkey,
      authorizedPubkey: FEE_PAYER.publicKey,
    }),
    SystemProgram.transfer({
      fromPubkey: FEE_PAYER.publicKey,
      toPubkey: to.publicKey,
      lamports: 1e8,
    })
  );

  tx.recentBlockhash = "EFtM4FKWZS8WUPd7VFW2Lukzk2KEgCucibrjF2jZDPyZ";
  tx.feePayer = FEE_PAYER.publicKey;
  tx.sign(FEE_PAYER);

  let rawtx = tx.serialize();
  console.log(`txhash: ${await CONNECTION.sendRawTransaction(rawtx)}`);
}

main().then(
  () => process.exit(),
  (err) => {
    console.error(err);
    process.exit(-1);
  }
);
