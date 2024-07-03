use("kec-crud");

// ?update on array

// ? $push
// ?add 92 on marks of Rajan
// db.scores.updateOne(
//   { name: "Rajan" },
//   {
//     $push: {
//       scores: 92,
//     },
//   }
// );
// ?add 87 and 93 to marks of Suyasha
// db.scores.updateOne(
//   { name: "Smarika" },
//   {
//     $push: { scores: { $each: [87, 93] } },
//   }
// );
// db.scores.find();

// $pop
// ? 1 => removes item from end of the array
// ? -1 => removes item from starting of array

// db.scores.updateOne(
//   { name: "Suyasha" },
//   {
//     $pop: { scores: -1 },
//   }
// );

// ? $pull => removes item based upon condition
// db.scores.updateOne(
//   { name: "Smarika" },
//   {
//     $pull: {
//       scores: { $lt: 70 },
//     },
//   }
// );
// db.scores.find();

// db.scores.updateOne(
//     { name: "Smarika" },
//     {
//       $pull: { points: { sub: "Science" } },
//     }
//   );
//   db.scores.find();
// db.scores.updateOne(
//   { name: "Suyasha", "points.sub": "Science" },
//   {
//     $set: {
//       "points.$.sub": "Maths",
//     },
//   }
// );
// db.scores.find();

// ?pull item which has sub "Science" and marks less than 88 from Rajan's data
