import {
  login,
  signup,
  forgot,
  reset,
  buying,
  enroll,
  admission,
  admission1,
  admission2,
  admission3,
} from "./login";

const loginbtn = document.getElementById("login");
const signupbtn = document.getElementById("signup");
const forgotbtn = document.getElementById("forgot");
const resetbtn = document.getElementById("resetpassword");
const enrollbtn = document.getElementById("enroll");
const admissionBtn = document.getElementById("admissionStart");
const admission1Btn = document.getElementById("admission1");
const admission2Btn = document.getElementById("admission2");
const admission3Btn = document.getElementById("admission3");

if (loginbtn) {
  loginbtn.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;
    login(email, password);
  });
}

if (signupbtn) {
  signupbtn.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("signup-name").value;
    const email = document.getElementById("signup-email").value;
    const password = document.getElementById("signup-password").value;
    const confirmPassword = document.getElementById(
      "signup-confirmPassword"
    ).value;
    signup(name, email, password, confirmPassword);
  });
}
if (forgotbtn) {
  forgotbtn.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("forgot-email").value;
    forgot(email);
  });
}
if (resetbtn) {
  resetbtn.addEventListener("submit", (e) => {
    e.preventDefault();
    const password = document.getElementById("reset-password").value;
    const confirmPassword = document.getElementById(
      "reset-confirmPassword"
    ).value;
    reset(password, confirmPassword);
  });
}

if (enrollbtn) {
  enrollbtn.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("enroll-name").value;
    const email = document.getElementById("enroll-email").value;
    const phone = document.getElementById("phone-number").value;

    enroll(name, email, phone);
  });
}
if (admissionBtn) {
  admissionBtn.addEventListener("click", (e) => {
    e.preventDefault();
    admission();
  });
}
if (admission1Btn) {
  admission1Btn.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("admission-name").value;
    const phone = document.getElementById("admission-phoneNo").value;
    const dob = document.getElementById("admission-dob").value;
    const studentclass = document.getElementById("studentclass").value;
    const gender = document.getElementById("admission-gender").value;
    const adhar = document.getElementById("admission-adhar").value;

    admission1(name, phone, studentclass, dob, gender, adhar);
  });
}
if (admission2Btn) {
  admission2Btn.addEventListener("submit", (e) => {
    e.preventDefault();
    const nationallity = document.getElementById(
      "admission-nationallity"
    ).value;
    const religion = document.getElementById("admission-religion").value;
    const catagory = document.getElementById("admission-catagory").value;
    const fatherName = document.getElementById("admission-fatherName").value;
    const motherName = document.getElementById("admission-motherName").value;

    admission2(nationallity, religion, catagory, fatherName, motherName);
  });
}
if (admission3Btn) {
  admission3Btn.addEventListener("submit", (e) => {
    e.preventDefault();
    const policeStation = document.getElementById(
      "admission-policeStation"
    ).value;
    const village = document.getElementById("admission-village").value;
    const postOffice = document.getElementById("admission-postOffice").value;
    const pin = document.getElementById("admission-pin").value;
    const dist = document.getElementById("admission-dist").value;
    const transport = document.getElementById("admission-transport").value;
    const stay = document.getElementById("admission-stay").value;

    admission3(village, postOffice, policeStation, pin, dist, transport, stay);
  });
}
