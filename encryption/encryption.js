const aes256 = require("aes256");

const key = "special-key-1";
const otherKey = "special-key-2";

const plainText = "Programming is great!";

const encrypted = aes256.encrypt(key, plainText);
console.log("Encrypted:", encrypted);

const decrypted = aes256.decrypt(key, encrypted);
console.log("Decrypted:", decrypted);

const failedDecrypted = aes256.decrypt(otherKey, encrypted);
console.log("Failed Decrypted:", failedDecrypted);
