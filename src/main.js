const EC = require("elliptic").ec;
const ec = new EC("secp256k1");
const { Blockchain, Transaction } = require("./blockchain");

const myKey = ec.keyFromPrivate(
  "a1a1c6cdddb39adf7519be8babe0d7cff8abd6fb1dedbbd19675a6c08e9eb4f4"
);
const myWalletAddress = myKey.getPublic("hex");

// // Print Result-1
// let savjeeCoin = new Blockchain();
// savjeeCoin.addBlock(new Block(1, "10/07/2020", { amount: 4 }));
// savjeeCoin.addBlock(new Block(2, "12/07/2020", { amount: 10 }));

// Print Result-1
// console.log("Is blockchain valid? ", savjeeCoin.isChainValid());
// savjeeCoin.chain[1].data = { amount: 100 };
// savjeeCoin.chain[1].hash = savjeeCoin.chain[1].calculateHash();
// console.log("Is blockchain valid? ", savjeeCoin.isChainValid());
// console.log(JSON.stringify(savjeeCoin, null, 4));

// // Print Result-2
// let savjeeCoin = new Blockchain();
// console.log("Mining block 1 ...");
// savjeeCoin.addBlock(new Block(1, "10/07/2020", { amount: 4 }));
// console.log("Mining block 2 ...");
// savjeeCoin.addBlock(new Block(2, "12/07/2020", { amount: 10 }));

// // Print Result-3
// let savjeeCoin = new Blockchain();
// savjeeCoin.createTransaction(new Transaction("address1", "address2", 100));
// savjeeCoin.createTransaction(new Transaction("address2", "address1", 100));

// console.log("\n Starting the miner...");
// savjeeCoin.minePendingTransaction("illya-address");

// console.log(
//   "\nBalance of Illya is",
//   savjeeCoin.getBalanceOfAddress("illya-address")
// );
// console.log("\n Starting the miner again...");
// savjeeCoin.minePendingTransaction("illya-address");

// console.log(
//   "\nBalance of Illya is",
//   savjeeCoin.getBalanceOfAddress("illya-address")
// );

// Print Result-4
let savjeeCoin = new Blockchain();
const tx1 = new Transaction(myWalletAddress, "public key goes here", 10);
tx1.signTransaction(myKey);
savjeeCoin.addTransaction(tx1);

console.log("\n Starting the miner...");
savjeeCoin.minePendingTransaction("myWalletAddress");

console.log(
  "\nBalance of Illya is",
  savjeeCoin.getBalanceOfAddress("myWalletAddress")
);

console.log("Is chain valid?", savjeeCoin.isChainValid());
