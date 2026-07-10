if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
}
const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = process.env.MONGO_URL || "mongodb://127.0.0.1:27017/wanderLust";
main()
.then(() => {
    console.log("connected to DB");
    initDB();
})
.catch((err) => {
    console.log(err);
    process.exit(1);
});
async function main(){
 await mongoose.connect(MONGO_URL);
}

const initDB = async() => {
    await Listing.deleteMany({});
    await Listing.insertMany(initData.data);
    console.log("data was initialised");
    mongoose.connection.close();
};
