use("kec-crud");

// ? comparison operator
// ? $eq, $ne, $gt, $gte, $lt, $lte, $in, $nin



// * $eq
// ? find movie whose name is "Glee"

// ? name === "Glee"
//db.movies.find();

//db.movies.find({ name: { $eq: "Glee" } }, { name: 1, genres: 1 });

// equivalent code
// db.movies.find({ name: "Glee" });

// * $gt
// db.movies.find({ runtime: { $gt: 70 } }, { name: 1, runtime: 1 });

// ?find movies whose rating is greater than 9
//db.movies.find({ "rating.average": { $gte: 9 } },{name:1,averageRating:"$rating.average"});
// *ne
// db.movies.find({ id: { $ne: 1 } });

// also can be written as

db.movies.find({ id: { $not: { $eq: 1 } } });
