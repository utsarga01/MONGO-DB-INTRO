use("kec-crud");

// ? array operators
// ? $all
// ? $elemMatch
// ? $size

// find movies whose genre includes both "Drama" and "Comedy"

//db.movies.find({ $and: [{ genres: "Drama" }, { genres: "Comedy" }] });

//  ? same field ma "$and" use bhairako xa ra tyo field array ho bhane
// ?we can use $all

//db.movies.find({ genres: { $all: ["Drama", "Comedy"] } });

// *$size
// ? we cannot provide range to size
// ? must provide concrete values
// ?find movies whose genre size is  3
db.movies.find({ genres: { $size: 3 } });
