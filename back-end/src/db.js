import { MongoClient } from 'mongodb';

let client;

export const initializeDbConnection = async () => {
  client = await MongoClient.connect('mongodb://localhost:27017', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

// export const initializeDbConnection = async () => {
//   try {
//     client = await MongoClient.connect(
//       'mongodb+srv://AdminInok:reginold@projectonecluster.ut44a.mongodb.net/react-auth?retryWrites=true&w=majority',
//       {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//       }
//     );
//   } catch (error) {
//     console.log(error);
//   }
// };

export const getDbConnection = (dbName) => {
  const db = client.db(dbName);
  return db;
};
