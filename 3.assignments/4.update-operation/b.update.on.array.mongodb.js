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
db.scores.updateOne(
  {
    name: "Smarika",
  },
  {
    $pull: {
      scores: { $lt: 50 },
    },
  }
);
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
// db.scores.updateOne(
//   { name: "Rajan" },
//   { $pull: { points: { $elemMatch:{sub: "Science",marks:{$lt:88} }  },}}
// );
// db.scores.updateOne(
//   { name: "Rajan" },
//   {
//     $pull: {
//       points: { sub: "Science" },
//       marks: { $lt: 88 },
//     },
//   }
// );
// db.scores.updateOne(
//   { name: "Rajan" },
//   {
//     $pull: {
//       points: { sub: "Science" },
//       marks: { $lt: 88 },
//     },
//   }
// );

// ? $pullAll
// ? we give concrete value which needs to be removed
// db.scores.updateOne(
//   { _id: ObjectId("6685201898b4d15ad70e2db5") },
//   {
//     $pullAll: {
//       scores: [42, 65],
//     },
//   }
// );

// ? push 78,67,83 to the marks array of Rajan
// db.scores.updateOne(
//   { name: "Rajan" },
//   {
//     $push: { scores: { $each: [78, 67, 83] } },
//   }
// );{

// ? $addToSet => overwrite gardaina yedi value pailai xa vane
// db.scores.updateOne(
//   { name: "Rajan" },
//   {
//     $addToSet: { scores: { $each: [12, 45, 83, 99] } },
//   }
// );
// db.scores.updateOne(
//   { name: "Rajan" },
//   {
//     $addToSet: {
//       points: { sub: "Social", point: 83 },// also works on the object level
//     },
//   }
// );

// ? push an object with sub:Science and point:92 on Suyasha points.
// db.scores.updateOne(
//   { name: "Suyasha" },
//   {
//     $push: {
//       points: { sub: "Science", points: 92 },
//     },
//   }
// );

// ? push 57,88,96 on Suyasha's marks such that no value is duplicated
// db.scores.updateOne(
//   { name: "Suyasha" },
//   {
//     $addToSet: { scores: { $each: [57, 88, 96, 99] } },
//   }
// );

// ? change Rajan's lucky colour to "Orange"
// db.scores.updateOne(
//   { name: "Rajan" },
//   {
//     $set: { "luckyThings.color": "Orange" },
//   }
// );

// ? pull last item from Rajan's points
// db.scores.updateOne(
//   { name: "Rajan" },
//   {
//     $pop: {
//       points: 1,
//     },
//   }
// );

// ? decrease age of Smarika by 20
// db.scores.updateOne(
//   { name: "Smarika" },
//   {
//     $inc: { age: -20 },
//   }
// );

// ? push {sub:"C Program",point:72} and {sub:"C++",point:65} on smarika's  points

// db.scores.updateOne(
//   { name: "Smarika" },
//   {
//     $push: {
//       points: {
//         $each: [
//           { sub: "C Program", point: 72 },
//           { sub: "C++", point: 65 },
//         ],
//       },
//     },
//   }
// );

// ? divide age of Rajan by 2
// db.scores.updateOne(
//   { name: "Rajan" },
//   {
//     $mul: {
//       age: 1 / 2,
//     },
//   }
// );

// db.scores.find();
