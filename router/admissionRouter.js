const express = require("express");
const Router = express.Router();

const admissionController = require("../controller/admissionController");
const authController = require("../controller/authController");

Router.route("/alladmission").get(
  authController.protect,
  authController.acessTo("admin"),
  admissionController.getAdmission
);
Router.route("/").post(
  authController.protect,
  admissionController.createAdmission
);

Router.route("/:admissionId")
  .post(authController.protect, admissionController.createAdmission)
  .patch(authController.protect, admissionController.deleteAdmission);

Router.route("/:admissionId/page1").post(
  authController.protect,
  admissionController.createAdmission1
);
Router.route("/:admissionId/page2").post(
  authController.protect,
  admissionController.createAdmission2
);
Router.route("/:admissionId/page3").post(
  authController.protect,
  admissionController.createAdmission3
);

module.exports = Router;
