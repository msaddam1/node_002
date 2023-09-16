const dbConnect = require('./mongodb');

const insert = async () => {
    const db = await dbConnect();
    const result = await db.insertMany(
        [
        {
            name: 'max 1',
            price: 220,
            brand: 'Micromax',
            category: 'mobile'
        },
        {
            name: 'max 2',
            price: 320,
            brand: 'Micromax',
            category: 'mobile'
        },
        {
            name: 'max 3',
            price: 420,
            brand: 'Micrpmax',
            category: 'mobile'
        }
    ]
        );
    // if (result.acknowledged) {
    //     console.log("data inserted");
    // }

}
insert();