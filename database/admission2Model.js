const mongoose = require("mongoose");

const admissionSchema = new mongoose.Schema({
  nationallity: {
    type: String,
    required: [true, "name must be required"],
  },
  religion: {
    type: String,
    required: [true, "name must be required"],
  },
  catagory: {
    type: String,
    required: [true, "name must be required"],
  },

  photo: {
    type: String,
  },
  fatherName: {
    type: String,
    required: [true, "name must be required"],
    minlength: [5, "name must have more than 5 cheracters"],
    lowercase: true,
    trim: true,
  },
  motherName: {
    type: String,
    required: [true, "name must be required"],
    minlength: [5, "name must have more than 5 cheracters"],
    lowercase: true,
    trim: true,
  },
  admissionNo: {
    type: mongoose.Schema.ObjectId,
    ref: "Admission",
    required: [true, "admissionNo must be required"],
  },
});

const Admission2 = mongoose.model("Admission2", admissionSchema);
module.exports = Admission2;
