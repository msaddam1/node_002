const dbConnect= require('./mongodb');

const deleteData = async ()=>{
    let data = await dbConnect();
    let result = await data.deleteOne({name:'max 1'});
    console.warn(result);
};
deleteData();