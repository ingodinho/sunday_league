import {Db, MongoClient} from "mongodb";

const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

const dbName = "sunday";

let _db : Db;
export const getDB = async () => {
    if (_db) {
        return _db;
    }

    const connectedClient = await client.connect();
    _db = connectedClient.db(dbName);
    return _db;
}
