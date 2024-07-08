use("kec-crud");
// ?$lookup
// ? to query between collections

// db.person.insertMany([
//   {
//     firstName: "Rohan",
//     lastName: "Bhandari",
//     address: "Sydney",
//   },
//   {
//     firstName: "Rohil",
//     lastName: "Khadka",
//     address: "Udaypur",
//   },
//   {
//     firstName: "Enish",
//     lastName: "Shrestha",
//     address: "Kathmandu",
//   },
// ]);

// db.person.find();

// db.vehicle.insertMany([
//   {
//     model: "X",
//     brand: "Tesla",
//     builtYear: 2021,
//     ownerId: ObjectId("668bb338983dc01d14f47388"),
//   },
//   {
//     model: "Mustang",
//     brand: "Ford",
//     builtYear: 2023,
//     ownerId: ObjectId("668bb338983dc01d14f47389"),
//   },
//   {
//     model: "Creta",
//     brand: "Hyundai",
//     builtYear: 2024,
//     ownerId: ObjectId("668bb338983dc01d14f4738a"),
//   },
// ]);

// db.vehicle.find();

// db.vehicle.aggregate([
//   {
//     $match: {
//       model: "Mustang",
//     },
//   },
//   {
//     $lookup: {
//       from: "person",
//       localField: "ownerId",
//       foreignField: "_id",
//       as: "ownerDetails",
//     },
//   },

//   {
//     $project: {
//       model: 1,
//       brand: 1,
//       ownerFirstName: { $first: "$ownerDetails.firstName" },
//       ownerLastName: { $first: "$ownerDetails.lastName" },
//     },
//   },
//   {
//     $project: {
//       model: 1,
//       brand: 1,
//       ownerFullName: { $concat: ["$ownerFirstName", " ", "$ownerLastName"] },
//     },
//   },
// ]);

// db.person.aggregate([
//   {
//     $match: {
//       firstName: "Enish",
//     },
//   },
//   {
//     $lookup: {
//       from: "vehicle",
//       localField: "_id",
//       foreignField: "ownerId",
//       as: "vehicleDetails",
//     },
//   },
//   {
//     $project: {
//       firstName: 1,
//       carModel: { $arrayElemAt: ["$vehicleDetails.model", 0] },
//       carBrand: { $arrayElemAt: ["$vehicleDetails.brand", 0] },
//     },
//   },
//   {
//     $project: {
//       firstName: 1,
//       lastName: 1,
//       carModel: { $first: "$vehicleDetails.model" },
//     },
//   },
// ]);

// db.vehicle.insertOne({
//   model: "Y",
//   brand: "tesla",
//   builtYear: 2020,
//   ownerId: ObjectId("668bb338983dc01d14f4738a"),
// });

// db.vehicle.find();

db.person.aggregate([
  {
    $match: {
      firstName: "Enish",
    },
  },
  {
    $lookup: {
      from: "vehicle",
      localField: "_id",
      foreignField: "ownerId",
      as: "vehicleData",
    },
  },
  {
    $project: {
      firstName: 1,
      lastName: 1,

      "vehicleData.model": 1,
      "vehicleData.brand": 1,
      lastCarBrand: { $last: "$vehicleData.brand" },
    },
  },
]);
