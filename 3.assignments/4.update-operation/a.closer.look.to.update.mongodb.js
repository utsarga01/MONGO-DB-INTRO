use("kec-crud");

//db.scores.find();

// ? $set

// db.scores.updateOne(
//   { name: "Subham" },
//   {
//     $set: {
//       name: "Rajan",
//     },
//   }
// );

// db.scores.updateMany(
//   {},
//   {
//     $set: {
//       age: 21,
//     },
//   }
// );
//db.scores.find();

// ? $unset => removes that field
// db.scores.updateOne(
//   {
//     name: "Rajan",
//   },
//   {
//     $unset: {
//       age: "",
//     },
//   }
// );
// ? update age of Rajan to 30

// db.scores.updateOne(
//   {
//     name: "Rajan",
//   },
//   {
//     $set: {
//       age: 30,
//     },
//   }
// );
// ? update age of Suyasha to 40
// db.scores.updateOne(
//   {
//     name: "Suyasha",
//   },
//   {
//     $set: {
//       age: 40,
//     },
//   }
// );

// ? $inc => increases value of field by provided value

// db.scores.updateMany(
//   {},
//   {
//     $inc: {
//       age: 5,
//     },
//   }
// );
// db.scores.insertOne({
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
//     age: 30,
//   });
// db.scores.updateMany(
//   { name: "Smarika" },
//   {
//     $inc: {
//       age: -10,
//     },
//   }
// );

// ? $mul => multiply
// db.scores.updateOne(
//   { _id: ObjectId("6682996edc7955631144d16f") },
//   {
//     $mul: {
//       age: 2,
//     },
//   }
// );

// ? divide age pf Suyasha by 2

// db.scores.updateOne(
//   { _id: ObjectId("6682996edc7955631144d16f") },
//   {
//     $mul: {
//       age: 1 / 2,
//     },
//   }
// );
// db.scores.find();

// ? $rename => renames field
// db.scores.updateMany(
//   {},
//   {
//     $rename: {
//       scores: "marks",
//     },
//   }
// );

// ? $min, $max

// ? $min => specified value bhanda mathiko
// db.scores.updateMany(
//   {},
//   {
//     $min: { age: 16 },
//   }
// );

// ? $max => if field value is less than specified value, it sets max value to that field
// db.scores.updateMany(
//   {},
//   {
//     $max: {
//       age: 50,
//     },
//   }
// );

// db.scores.updateMany(
//   {},
//   {
//     $set: {
//       luckyThings: {
//         number: 7,
//         color: "green",
//       },
//     },
//   }
// );

// db.scores.find();

// ?update lucky color of Suyasha to "Blue"
// db.scores.updateOne(
//   { name: "Suyasha" },
//   {
//     $set: {
//       "luckyThings.color": "Blue",
//     },
//   }
// );
//db.scores.find();

// update lucky number of smarika to 8
// db.scores.updateOne(
//   { name: "Smarika" },
//   {
//     $set: {
//       "luckyThings.number": 8,
//     },
//   }
// );
// db.scores.find();

// ?increase lucky number of  Rajan by 3
// db.scores.updateOne(
//   { name: "Rajan" },
//   {
//     $inc: {
//       "luckyThings.number": 3,
//     },
//   }
// );
// db.scores.find();
