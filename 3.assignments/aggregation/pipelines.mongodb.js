use("kec-crud");

// ? aggregation => powerful query tool
// ? uses pipeline stage

// 1. $match

// db.movies.aggregate([
//   {
//     $match: {
//       name: "Glee",
//     },
//   },
// ]);

// db.movies.aggregate([
//   {
//     $match:{
//       name:"Glee",
//     },
//   },
// ]);

// db.movies.aggregate([
//   {
//     $match: {
//       genres: "Action",
//       "rating.average": { $gt: 9 },
//     },
//   },
//   {
//     $project: {
//       _id: 0,
//       name: 1,
//       genres: 1,
//       rating: 1,
//     },
//   },
// ]);
// db.movies.aggregate([
//   {
//     $match: {
//       genres: "Action",
//       "rating.average": { $gt: 9 },
//     },
//   },
//   {
//     $project: {
//       _id: 0,
//       name: 1,
//       genres: 1,
//     },
//   },
// ]);

// db.movies.find();

// db.movies.aggregate([
//   {
//     $match: {
//       $or: [{ genres: "Crime" }, { "network.country.name": "United States" }],
//     },
//   },
//   {
//     $project: {
//       name: 1,
//       genres: 1,
//       networkCountry: "$network.country.name",//network country vanne variable banako ani $ le tyo name field lai janauxa
//     },
//   },
// ]);
// db.movies.aggregate([
//   {
//     $match:{

//       $or:[{genres:"crime"},{"network.country.name":"United States"}]
//     },
//   },
//   {
//     $project:{
//        name:1,
//       genres:1,

//     },
//   },

// ]);

// find movies whose genre includes both "Drama" and "Comedy"
// ? project "name" and genre field

// db.movies.find();

// db.movies.aggregate([
//   {
//     $match: {
//       $and: [{ genres: "Drama" }, { genres: "Comedy" }],
//     },
//   },
//   {
//     $project: {
//       name: 1,
//       genres: 1,
//     },
//   },
// ]);

// db.movies.aggregate([
//   {
//     $match: {
//       genres: { $all: ["Drama", "Comedy"] },
//     },
//   },
//   {
//     $project: {
//       name: 1,
//       genres: 1,
//     },
//   },
// ]);

// ? ??? $sort => arranges data in  either ascending or descending order
// ? 1 => ascending order
// ? -1 => descending order

// db.movies.aggregate([
//   {
//     $match: {},
//   },

//   {
//     $sort: {
//       id: 1,
//       name:
//     },
//   },
//   {
//     $project: {
//       id: 1,
//       name: -1,// compound sort yedi same id xa vane name ko 1 -1 herera alphabetically sort garxa
//     },
//   },
// ]);

// db.movies.aggregate([
//   {
//     $match: {},
//   },
//   {
//     $sort: {
//       name: -1, //descending sort
//     },
//   },
//   {
//     $project: {
//       name: 1,
//     },
//   },
// ]);

// ? $skip =>
// ? $limit => number of documents to be returned
// db.movies.insertOne({ id: 17, name: "Money Heist" });
// db.movies.aggregate([
//   {
//     $match: {},
//   },
//   {
//     $sort: {
//       id: 1,
//     },
//   },
//   {
//     $limit: 5,
//   },
//   {
//     $project: {
//       id: 1,
//       name: 1,
//     },
//   },
// ]);

// ? find movies whose rating is greater than 8 and id is sorted in ascending order

// db.movies.aggregate([
//   {
//     $match: {
//       "rating.average": { $gt: 8 },
//     },
//   },
//   {
//     $sort: {
//       id: 1,
//     },
//   },
//   {
//     $project: {
//       name: 1,
//     },
//   },
// ]);
// ?used for pagination
// let page = 1;
// let limit = 10;
// let skip = (page - 1) * limit;
// db.movies.aggregate([
//   {
//     $match: {},
//   },
//   {
//     $sort: {
//       id: 1,
//     },
//   },
//   {
//     $skip: skip,
//   },
//   { $limit: limit },
//   {
//     $project: {
//       _id: 0,
//       name: 1,
//       id: 1,
//     },
//   },
// ]);
