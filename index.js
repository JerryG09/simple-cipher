import CryptoJS from "crypto-js";

const plainText = document.getElementById("plainText");
const result = document.getElementById("result");

const encrypt = document.getElementById("encrypt");
const decrypt = document.getElementById("decrypt");

encrypt.addEventListener("click", (e) => {
  const text = plainText.value;
  const ciphertext = CryptoJS.AES.encrypt(text, "secret key 123").toString();
  result.innerHTML = ciphertext;
});

decrypt.addEventListener("click", (e) => {
  const ciphertext = plainText.value;
  const bytes = CryptoJS.AES.decrypt(ciphertext, "secret key 123");
  const originalText = bytes.toString(CryptoJS.enc.Utf8);
  result.innerHTML = originalText;
});
