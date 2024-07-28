import mongoose from "mongoose";


export const Connection = async () => {
    const URL = `mongodb+srv://prince:prince123@cluster0.p5g0lgk.mongodb.net/`
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log("database has been connected.")
    } catch (error) {
        console.log("there is an error while connecting to database ", error.message)
    }
}

export default Connection;