if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
}
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js"); 
const MONGO_URL = process.env.MONGO_URL || "mongodb://127.0.0.1:27017/wanderLust";
const PORT = process.env.PORT || 8080;
const path = require("path");
const methodOverride =require("method-override");
const ejsMate = require("ejs-mate");
const wrapAsync = require("./utils/wrapAsync.js");
const ExpressError = require("./utils/ExpressError.js");
const{ listingSchema} = require("./schema.js");
async function main(){
 await mongoose.connect(MONGO_URL); 
}
app.set("view engine", "ejs");
app.set("views", path.join(__dirname,"views"));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname,"/public")));

app.get("/", wrapAsync(async (req, res) => {
    const listings = await Listing.find({}).sort({ _id: -1 });
    const totalListings = listings.length;
    const countries = new Set(listings.map((listing) => listing.country).filter(Boolean));
    const avgPrice = totalListings
        ? Math.round(listings.reduce((sum, listing) => sum + (listing.price || 0), 0) / totalListings)
        : 0;
    const featuredListings = listings.slice(0, 6);

    res.render("home.ejs", {
        listings,
        featuredListings,
        totalListings,
        totalCountries: countries.size,
        avgPrice,
    });
}));
 
const validateListing = (req, res, next) =>{
    let {error} = listingSchema.validate(req.body);
       
       if(error){
        let errMsg = error.details.map((el) => el.message).join(",");
        throw new ExpressError(400, errMsg);
       } else {
        next();
       }
};
//index route
app.get("/listings" ,
    wrapAsync(
        async (req,res) =>{
   const allListings = await Listing.find({}).sort({ _id: -1 });
   res.render("listings/index.ejs", { allListings }); 
    }));
    //new Route
app.get("/listings/new" , (req,res) => {
    res.render("listings/new.ejs"); 
});
//show route
app.get("/listings/:id", wrapAsync(async(req,res) => {
    let {id} = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/show.ejs", {listing});
}));
// create route
app.post("/listings",
    validateListing,
    wrapAsync(
    async (req,res,next) => {
       
       const newListing = new Listing(req.body.listing);
        await newListing.save();
       res.redirect("/listings");
    })
 );
//edit route
app.get("/listings/:id/edit" , wrapAsync
    (async(req,res) =>{
    let {id} = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/edit.ejs",{listing});
}));
//update route
app.put("/listings/:id" ,
    validateListing,
     wrapAsync(async(req,res) =>{
    
    let {id} = req.params;
    await Listing.findByIdAndUpdate(id,{...req.body.listing});
    res.redirect(`/listings/${id}`);
}));
//delete route
app.delete("/listings/:id", wrapAsync(async (req,res) => {
    let {id} = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    console.log(deletedListing);
    res.redirect("/listings");
}));

app.all("*", (req, res, next) =>{
    next(new ExpressError(404, "Page not found !"));
})
app.use((err,req, res, next) => {
    let {statusCode=500 , message="something went wrong!"} = err;
    res.status(statusCode).render("error.ejs",{message});
    //res.status(statusCode).send(message);
});
main()
.then(() => {
    console.log("connected to DB");
    app.listen(PORT, () => {
        console.log(`server is listening to port ${PORT}`); 
    });
})
.catch((err) => {
    console.log(err);
    process.exit(1);
});
