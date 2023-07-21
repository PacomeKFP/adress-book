import * as bcrypt from "bcrypt";

const SALT_ROUNDS = import.meta.env.VITE_BCRYPT_SALT_ROUNDS;
async function encryptPassword(password) {
  bcrypt.genSalt(SALT_ROUNDS, (saltErr, salt) => {
    return !saltErr
      ? bcrypt.hash(password, salt, (hashErr, hash) => {
          return !hashErr ? hash : alert("Hash error");
        })
      : alert("Salt Error");
  });
}

function isGoodPassword(password, hash) {
  return bcrypt.compare(password, hash, (err, result) => {
    return !err ? result : alert("Error occured when comparing passwords");
  });
}

export { encryptPassword, isGoodPassword };
