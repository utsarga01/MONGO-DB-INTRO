use("kec-crud");
// ?read operations

//?Find movies whose status is "Ended"
//db.movies.find({ status: "Ended" }, { name: 1, status: 1 });

// ?find movies whose rating is 9
// db.movies.find({ "rating.average": 9 }, { name: 1, rating: 1 });

// ?find movies whose rating is greater than 7 and less than 9
// db.movies.find(
//   {
//     $and: [{ "rating.average": { $gt: 7 } }, { "rating.average": { $lt: 9 } }],
//   },
//   { name: 1, rating: 1 }
// );
// db.movies.find(
//   { "rating.average": { $lt: 9, $gt: 7 } },
//   { name: 1, rating: 1 }
// );
// ?find movies whose genres is Thriller
//  db.movies.find({ genres: "Thriller" }, { name: 1, genre: 1 });

// ?find movies whose status is Running
// db.movies.find({ status: "Running" }, { name: 1, status: 1 });

//? find movies whose status is Ended and runtime is 60
// db.movies.find({
//   $and: [{ status: "Ended" }, { runtime: 60 }],
// });

// ?find movies whose weight is 75 and network country is Canada
// db.movies.find({
//   $and: [{ weight: 75 }, { "network.country.name": "Canada" }],
// });

// ?find movies whose weight is 96 or runtime is 60
// db.movies.find({
//   $or: [{ weight: 96 }, { runtime: 60 }],
// });

// ? find movies whose rating average is not 9
// db.movies.find({ "rating.average": { $ne: 9 } });

// ? find movies whose rating average is either 6 or 6.5 or
// ?9 or 8 or 8.5 or 8.6 or 7.7 or 6.1 or 7.8
// ?read operations
// db.movies.find({
//   $or: [
//     { "rating.average": 6 },
//     { "rating.average": 6.5 },
//     { "rating.average": 9 },
//     { "rating.average": 8 },
//     { "rating.average": 8.5 },
//     { "rating.average": 8.6 },
//     { "rating.average": 7.7 },
//     { "rating.average": 6.1 },
//     { "rating.average": 7.8 },
//   ],
// });
// db.movies.find({
//   "rating.average": { $in: [6, 6.5, 9, 8, 8.5, 8.6, 7.7, 6.1, 7.8] },
// });
// ? find movies whose status is neither "Ended" not genres is "Action"
// db.movies.find({
//   $nor: [{ status: "Ended" }, { genre: "Action" }],
// });

// ? find movies whose genres includes 'Drama' , "Comedy" and "Action"
// db.movies.find(
//     {genres:{$all:["Drama","Comedy","Action"]}}
// );

// ? find movies whose genre size is 3
// db.movies.find({ genres: { $size: 3 } }, { name: 1, genres: 1 });

// db.scores.insertMany([
//   {
//     name: "Subham",
//     scores: [82, 85, 88],
//     points: [
//       {
//         sub: "Social",
//         point: 82,
//       },
//       {
//         sub: "Science",
//         point: 65,
//       },
//     ],
//   },
//   {
//     name: "Suyasha",
//     scores: [75, 88, 89],
//     points: [
//       {
//         sub: "Social",
//         point: 75,
//       },
//       {
//         sub: "Science",
//         point: 84,
//       },
//     ],
//   },

//   {
//     name: "Smarika",
//     scores: [42, 65, 88],
//     points: [
//       {
//         sub: "Social",
//         point: 67,
//       },
//       {
//         sub: "Science",
//         point: 89,
//       },
//     ],
//   },
// ]);
// db.scores.find({
//   points: { $elemMatch: { sub: "Social", point: { $gt: 80 } } },
// });
// find students whose scores is greater than 80 and less than 85

// db.scores.find({
//   scores: { $elemMatch: { $gt: 80, $lt: 85 } },
// });


// db.movies.find({
//   "rating.average": { $in: [6, 6.5, 9, 8, 8.5, 8.6, 7.7, 6.1, 7.8] },
// });