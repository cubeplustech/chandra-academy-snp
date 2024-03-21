const Admission = require("../database/admissionModel");
const Admission1 = require("../database/admission1Model");
const Admission2 = require("../database/admission2Model");
const Admission3 = require("../database/admission3Model");
const catchAsync = require("../utility/catchAsync");
const { render } = require("pug");

exports.createAdmission = catchAsync(async (req, res, next) => {
  if (!req.body.user) req.body.user = req.user.id;
  if (!req.body.admissionNo)
    req.body.admissionNo = `${req.user.id}-${Date.now()}`;

  const admission = await Admission.create(req.body);

  res.status(200).json({
    status: "success",
    admission,
  });
});
exports.createAdmission1 = catchAsync(async (req, res, next) => {
  if (!req.body.admissionNo) req.body.admissionNo = req.params.admissionId;
  const admission = await Admission1.create(req.body);

  res.status(200).json({
    status: "success",
    admission,
  });
});
exports.createAdmission2 = catchAsync(async (req, res, next) => {
  if (!req.body.admissionNo) req.body.admissionNo = req.params.admissionId;

  const admission = await Admission2.create(req.body);

  res.status(200).json({
    status: "success",
    admission,
  });
});
exports.createAdmission3 = catchAsync(async (req, res, next) => {
  if (!req.body.admissionNo) req.body.admissionNo = req.params.admissionId;

  const admission = await Admission3.create(req.body);

  res.status(200).json({
    status: "success",
    admission,
  });
});

exports.getAdmission = catchAsync(async (req, res, next) => {
  const admission = await Admission.find();

  res.status(200).render("adminAdmission", admission);
});
exports.getOneAdmission = catchAsync(async (req, res, next) => {
  const admissionNo = req.params.admissionId;
  const admission = await Admission.findById(admissionNo);

  res.status(200).render("admissionReport", { admission });
});

exports.deleteAdmission = catchAsync(async (req, res, next) => {
  const admissionNo = req.params.admissionId;
  const admission = await Admission.findOne({ admissionNo });

  admission.status = "in-active";
  await admission.save();

  res.status(200).json({
    status: "success",
    admission,
  });
});
