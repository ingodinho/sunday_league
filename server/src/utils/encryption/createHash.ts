import crypto from "crypto";

const SECRET = process.env.HASH_SECRET;
export const createHash = (input : string) : string => {
    if(!SECRET) {
        throw new Error("Environment Variable HASH_SECRET not initialized");
    }

    return crypto.createHmac("sha256", SECRET)
        .update(input)
        .digest("hex")
}

export const createRandomHash = () => {
    if(!SECRET) {
        throw new Error("Environment Variable HASH_SECRET not initialized");
    }

    return createHash(Math.random().toString())
}
