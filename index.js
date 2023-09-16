const { MongoClient } = require('mongodb');
const url = 'mongodb://127.0.0.1:27017';
const database = 'e-comm'
const client = new MongoClient(url);

async function dbConnect() {
    let result = await client.connect();
    let db = result.db(database);
    return db.collection('products');
    // let data= await collection.find({name:'galaxy'}).toArray();
    // console.log(response);
};
// dbConnect().then((resp) => {
//     resp.find({}).toArray().then((data) => {
//         console.warn(data);

//     })
// });

const main = async()=>{
    let data =await dbConnect();
    data =await data.find().toArray();
    console.warn(data);
}
main();