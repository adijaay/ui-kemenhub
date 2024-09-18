export declare const aesEncode: ({ plainText, secret, }: {
    plainText: string;
    secret?: string;
}) => string;
export declare const aesDecode: ({ encryptedText, secret, }: {
    encryptedText: string;
    secret?: string;
}) => string;
