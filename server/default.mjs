
import products from "./constants/data.mjs";
import Product from "./model/product-schema.mjs";



const DefaultData = async () =>{
    try{
        await Product.insertMany(products);
        console.log('Data Imported Successfully.');

    } catch(error) {
        console.log("Error while inserting default data ", error.message);
    }
}

export default DefaultData;