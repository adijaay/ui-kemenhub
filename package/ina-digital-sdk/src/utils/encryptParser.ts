import * as CryptoJS from 'crypto-js';

export const aesEncode = ({
  plainText,
  secret,
}: {
  plainText: string;
  secret?: string;
}): string => {
  const initVector = "051d653d54e500ba";
  let Securitykey = "509d90337e3607164e8786e728bb3aa1";
  if (secret != '' && secret != undefined) {
    Securitykey = secret;
  } else {
    Securitykey = Securitykey;
  }
  console.log('security_key', { initVector, Securitykey });
  const cryptoOptions = {
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
    iv: CryptoJS.enc.Utf8.parse(initVector!),
    keySize: 256,
  };
  const cipher = CryptoJS.AES.encrypt(
    JSON.stringify(plainText),
    CryptoJS.enc.Utf8.parse(Securitykey!),
    cryptoOptions,
  );
  const encryptedData = CryptoJS.enc.Base64.stringify(cipher.ciphertext);
  return encryptedData;
};

export const aesDecode = ({
  encryptedText,
  secret,
}: {
  encryptedText: string;
  secret?: string;
}): string => {
  const initVector = "051d653d54e500ba";
  let Securitykey = "509d90337e3607164e8786e728bb3aa1";
  if (secret != '' && secret != undefined) {
    Securitykey = secret;
  } else {
    Securitykey = Securitykey;
  }
  console.log('secret_key', { initVector, Securitykey });
  const cryptoOptions = {
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
    iv: CryptoJS.enc.Utf8.parse(initVector!),
    keySize: 256,
  };
  const plainText = CryptoJS.AES.decrypt(
    encryptedText,
    CryptoJS.enc.Utf8.parse(Securitykey!),
    cryptoOptions,
  );
  const decodeText = plainText.toString(CryptoJS.enc.Utf8);
  let result: any = null;
  try {
    result = JSON.parse(decodeText);
    if (result != null) {
      result = JSON.parse(result);
      if (result["dtm"] != null) {
        const currTime = currentTimes("+7");
        const clientTime = clientTimes(result["dtm"], "+7");
        // console.log("time", currTime, clientTime);
        const calc = calcTime(clientTime, currTime);
        if (!calc) {
        }
        delete result["dtm"];
      }
      result = JSON.stringify(result);
    }
  } catch (e) {
    result = decodeText;
  }
  return result;
};

function clientTimes(date: any, offset: any) {
  // create Date object for current location
  const d = new Date(date);

  // convert to msec
  // subtract local time zone offset
  // get UTC time in msec
  const utc = d.getTime() + d.getTimezoneOffset() * 60000;

  // create new Date object for different city
  // using supplied offset
  const nd = new Date(utc + 3600000 * offset);

  // return time as a string
  return nd;
}

function currentTimes(offset: any) {
  // create Date object for current location
  const d = new Date();

  // convert to msec
  // subtract local time zone offset
  // get UTC time in msec
  const utc = d.getTime() + d.getTimezoneOffset() * 60000;

  // create new Date object for different city
  // using supplied offset
  const nd = new Date(utc + 3600000 * offset);

  // return time as a string
  return nd;
}

function calcTime(clientTime: Date, serverTime: Date) {
  const client: any = {};
  const server: any = {};
  client["hour"] = clientTime.getHours();
  client["minutes"] = clientTime.getMinutes();

  server["hour"] = serverTime.getHours();
  server["minutes"] = serverTime.getMinutes();

  console.log("calcTime", client, server);
  if (
    client["hour"] == server["hour"] &&
    client["minutes"] == server["minutes"]
  ) {
    return true;
  }
  return false;
}
