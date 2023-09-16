const dbConnect = require('./mongodb');

const updateData= async ()=>{
    let data = await dbConnect();
    let result= await data.updateOne(
        {name:'max 3'},{
            $set:{name:'max pro 3', brand:'Micromax'}
        }
        );
    console.warn(result);
}
updateData();