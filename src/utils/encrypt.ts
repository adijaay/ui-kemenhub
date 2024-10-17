import crypto from "crypto";

const cipher_key = process.env.ENCRYPTION_KEY;
const cipher_type = process.env.ENCRYPTION_TYPE;

if (!cipher_key) {
  throw new Error("ENCRYPTION_KEY must be set in environment variables");
}

if (!cipher_type) {
  throw new Error("ENCRYPTION_TYPE must be set in environment variables");
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function encrypt(data: any) {
  if (cipher_key && cipher_type) {
    const key = crypto.createHash("sha256").update(cipher_key).digest();
    const iv = crypto.randomBytes(12);
    data = JSON.stringify(data);
    const cipher = crypto.createCipheriv(
      cipher_type,
      key,
      iv,
    ) as crypto.CipherGCM;
    let encrypted = cipher.update(data, "utf8", "hex");
    encrypted += cipher.final("hex");
    const authTag = cipher.getAuthTag().toString("hex");
    const encryptedMessage =
      iv.toString("hex") + ":" + encrypted + ":" + authTag;
    // console.log('Encrypted Message:', encryptedMessage);
    return encryptedMessage;
  }
}

export function decrypt(encryptedMessage: string) {
  if (cipher_key && cipher_type) {
    const key = crypto.createHash("sha256").update(cipher_key).digest();
    const parts = encryptedMessage.split(":");
    const ivFromMessage = Buffer.from(parts[0], "hex");
    const encryptedData = parts[1];
    const authTagFromMessage = Buffer.from(parts[2], "hex");

    const decipher = crypto.createDecipheriv(
      cipher_type,
      key,
      ivFromMessage,
    ) as crypto.DecipherGCM;

    decipher.setAuthTag(authTagFromMessage);

    let decrypted = decipher.update(encryptedData, "hex", "utf8");
    decrypted += decipher.final("utf8");

    // console.log('Decrypted Data:', decrypted);

    return JSON.parse(decrypted);
  }
}
