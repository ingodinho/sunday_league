import {getDB} from "./getDB";

export const findAll = async () => {
    const db = await getDB();
    return await db.collection("user").find().toArray();
}
