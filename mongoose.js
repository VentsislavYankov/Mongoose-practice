const mongoose = require("mongoose");

//connect to mongoose

mongoose
  .connect(
    "mongodb+srv://VentsislavYankov:@mongodb.tqwzprr.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("Db connected"))
  .catch(err => console.log(err.message));

//schema
//name
//city
//courses

const studentSchema = new mongoose.Schema({
  name: String,
  city: String,
  courses: Array,
  isMarried: Boolean,
  age: Number,
});
//model

/*
const Student = mongoose.model("Student", studentSchema);

//create student
Student.create({
  name: "Koko",
  city: "Burgas",
  courses: ["CS", "English", "Administration"],
  isMarried: false,
  age: 25,
}).then((student)=>console.log(student)).catch((err)=>console.log(err));

// Student.create({
//   name: "Adwoa",
//   city: "USA",
//   courses: ["Twi"],
//   isMarried: false,
//   age: 30,
// })
//   .then(student => console.log(student))
//   .catch(err => console.log(err));

//find all students
/*
Student.find()
  .then(students => console.log(students))
  .catch(err => console.log(err));
    
  */
// Student.find()
//   .then(students => console.log(students))
//   .catch(err => console.log(err));

//find all students whose age  === 20

// Student.find({ age: 20 })
//   .then(students => console.log(students))
//   .catch(err => console.log(err));

//find single record

/*
 Student.findById("6399a21ff79723f2a1173b0f")
   .then(student => console.log(student))
   .catch(err => console.log(err));

   */
//find single record

Student.findOne({ name: "Koko" })
   .then(student => console.log(student))
   .catch(err => console.log(err));

//Update  record

// Student.findOneAndUpdate(
//   { name: "John" },
//   { age: 50 },
//   {
//     new: true,
//   }
// )
//   .then(student => console.log(student))
//   .catch(err => console.log(err));

// Student.findByIdAndUpdate(
//   "6308626ca44c9505e911f0ef",
//   { age: 50 },
//   {
//     new: true,
//   }
// )
//   .then(student => console.log(student))
//   .catch(err => console.log(err));

//delete
/*
Student.findByIdAndDelete("6308626ca44c9505e911f0ef")
  .then(() => console.log("Student has been deleted"))
  .catch(err => console.log(err));
*/