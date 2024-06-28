use("kec-crud");
// to insert data
// ? insertOne
// ? insertMany

// db.student.insertOne({
//   name: "Unik",
//   address: "Imadol",
// });

// db.student.find();
// db.student.insertOne({
//     _id:101,
//     name:"Smarika",
//     address:"Imadol",
// });

// db.student.insertMany([
//   {
//     name: "Samundra",
//     address: "Dhapakhel",
//   },
//   {
//     name: "Prashant",
//     address: "Dhapakhel",
//   },
// ]);

// ? read operation
// ? findOne
// ? find
//db.student.find();
// db.student.find({address:"Imadol"});
//db.student.findOne({name:"Samundra"});

//db.student.find();
//db.student.findOne({ address: "Imadol" });
//db.student.find({_id:101});

//db.student.find({_id:ObjectId("...id")});

// ?delete => Remove data

// ? deleteOne
// ? deleteMany

//db.student.find();

// db.student.deleteOne({ address: "Dhapakhel" });

// db.student.find();

//db.student.deleteMany({ address: "Imadol" });
//db.student.find();
// ? update => to change field data(s)
// ? updateOne
// ?updateMany
// db.student.updateOne({
//     name:"Samundra",
// },
//{
//     $set:{
//         name:"Siddhnat",
//     },
// });
// db.student.updateMany(
//   { address: "Dhapakhel" },
//   {
//     $set: {
//       address: "Nakhipot",
//     },
//   }
// );

// db.student.updateOne(
//   {
//     name: "Saugat",
//   },
//   {
//     $set: {
//       address: "Imadole",
//     },
//   },
//   {
//     upsert: true,
//   }
// );
db.student.find();
