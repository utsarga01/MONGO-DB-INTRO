use("kec-crud");

// ? evaluation operator
// ? $regex, $expr
// db.movies.find();
// db.movies.find({ name: { $regex: "top model", $options: "i" } });
// db.movies.find({ summary: { $regex: "dark comical", $options: "i" } });
// db.movies.find({ summary: { $regex: "dark comical", $options: "i" } });

// db.employee.insertMany([
//   { name: "Utsarga", income: 800, expense: 600 },
//   { name: "Smriti", income: 900, expense: 1100 },
//   { name: "Samrat", income: 1100, expense: 700 },
// ]);
// db.employee.find();
// ? find employees whose expense is greater than their income
// ?find employees whose income is less than 850
// db.employee.find({
//   $expr: { $gt: ["$expense", "$income"] },
// });

// db.employee.find({
//   income: { $lt: 850 },
// });
//db.employee.find({ expr: { $gt: ["$income", 850] } });
