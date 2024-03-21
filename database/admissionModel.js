const mongoose = require("mongoose");

const admissionSchema = new mongoose.Schema(
  {
    admissionNo: {
      type: String,
      unique: [true, "admission must be unique"],
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: [true, "user must be required"],
    },
    doa: {
      type: Date,
      default: Date.now(),
    },
    status: {
      type: String,
      default: "no-admit",
      enum: ["no-admit", "admit", "in-active"],
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

admissionSchema.virtual("admission1", {
  ref: "Admission1",
  foreignField: "admissionNo",
  localField: "_id",
});
admissionSchema.virtual("admission2", {
  ref: "Admission2",
  foreignField: "admissionNo",
  localField: "_id",
});
admissionSchema.virtual("admission3", {
  ref: "Admission3",
  foreignField: "admissionNo",
  localField: "_id",
});

admissionSchema.pre(/^find/, function (next) {
  this.populate({
    path: "user",
  });
  next();
});
admissionSchema.pre(/^find/, function (next) {
  this.populate({
    path: "admission1",
  });
  next();
});
admissionSchema.pre(/^find/, function (next) {
  this.populate({
    path: "admission2",
  });
  next();
});
admissionSchema.pre(/^find/, function (next) {
  this.populate({
    path: "admission3",
  });
  next();
});

const Admission = mongoose.model("Admission", admissionSchema);
module.exports = Admission;
