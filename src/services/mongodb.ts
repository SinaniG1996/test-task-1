import { MongoClient } from 'mongodb'

export const client = new MongoClient(process.env.DB_CONNECTION_URI as string);
export default client.db(process.env.DB_NAME)
