const axios = require("axios");

const hideAlert = () => {
  const el = document.querySelector(".alert");
  if (el) {
    el.parentElement.removeChild(el);
  }
};

const showAlert = (status, message) => {
  hideAlert();
  const el = `<div class="alert alert-${status}">${message}</div>`;
  document.querySelector("body").insertAdjacentHTML("afterbegin", el);
  window.setTimeout(hideAlert, 3000);
};

exports.login = async (email, password) => {
  console.log(email, password);
  //   console.log(`${req.protocol}://${req.get("host")}/login`);
  try {
    const response = await axios({
      method: "POST",
      //   url: `${req.protocol}://${req.get("host")}/login`,
      url: "https://chandraacademysonepur.com/login",
      data: {
        email,
        password,
      },
      httpOnly: true,
    });
    console.log(response.data);

    if (response.data.status === "success") {
      showAlert("success", "login successful.");
      window.setTimeout(() => {
        location.assign("/");
      }, 1000);
    }
  } catch (err) {
    showAlert("err", err.response.data.message);
    console.log(err.response);
  }
};

exports.signup = async (name, email, password, confirmPassword) => {
  try {
    const response = await axios({
      method: "POST",
      url: "https://chandraacademysonepur.com/signup",
      data: {
        name,
        email,
        password,
        confirmPassword,
      },
      httpOnly: true,
    });
    console.log(response.data);

    if (response.data.status === "success") {
      showAlert("success", "signup successful.");
      window.setTimeout(() => {
        location.assign("/");
      }, 1000);
    }
  } catch (err) {
    showAlert("err", err.response.data.message);
    console.log(err.response);
  }
};
exports.forgot = async (email) => {
  console.log(email);
  try {
    const response = await axios({
      method: "POST",
      url: "https://chandraacademysonepur.com/forgot",
      data: {
        email,
      },
      httpOnly: true,
    });
    console.log(response.data);

    if (response.data.status === "success") {
      showAlert("success", "link send to your email please check..");

      // window.setTimeout(() => {
      //   location.assign("/");
      // }, 2000);
    }
  } catch (err) {
    showAlert("err", err.response.data.message);
    console.log(err.response.data);
  }
};
exports.reset = async (password, confirmPassword) => {
  console.log(password, confirmPassword);
  const resetToken = window.location.pathname.split("/")[2];
  try {
    const response = await axios({
      method: "patch",
      url: `https://chandraacademysonepur.com/resetPassword/${resetToken}`,
      data: {
        password,
        confirmPassword,
      },
      httpOnly: true,
    });
    console.log(response.data);

    if (response.data.status === "success") {
      showAlert("success", "password reset successful.");
      window.setTimeout(() => {
        location.assign("/login");
      }, 1000);
    }
  } catch (err) {
    showAlert("err", err.response.data.message);
    console.log(err.response.data);
  }
};
exports.buying = async (productId) => {
  console.log(productId);

  try {
    const resp = await axios(
      `https://chandraacademysonepur.com/product/checkout/${productId}`
    );
    console.log(resp.data);
    if (resp.data.status === "success") {
      showAlert("success", "redirect to payment successful.");

      const optionshow = {
        checkout: {
          method: {
            netbanking: "1", // Show netbanking
            card: "1", // Show card
            upi: "1", // Hide UPI
            wallet: "1", // Hide wallet
          },
        },
      };

      var options = {
        key: "rzp_test_SlbaOygYXkIp3A",
        amount: resp.data.order.amount,

        currency: "INR",
        name: "Acme Corp",
        description: "Test Transaction",
        image: "https://picsum.photos/200/300",
        order_id: resp.data.order.id,
        // callback_url: "/product",
        prefill: {
          name: "debashish meher",
          email: "debashishmeher955@gmail.com",
          contact: "7328899428",
        },
        options: optionshow,

        notes: {
          address: "Razorpay Corporate Office",
        },
        theme: {
          color: "#3399cc",
        },
      };
      var rzp1 = new window.Razorpay(options);

      rzp1.open();
      e.preventDefault();
    }
  } catch (err) {
    showAlert("err", err.resp);
    console.log(err);
  }
};

exports.enroll = async (name, email, phone) => {
  try {
    const response = await axios({
      method: "POST",
      url: "https://chandraacademysonepur.com/enroll",
      data: {
        name,
        email,
        phone,
      },
      httpOnly: true,
    });
    console.log(response.data);

    if (response.data.status === "success") {
      showAlert("success", "enroll successful.");
      window.setTimeout(() => {
        location.assign("/");
      }, 1000);
    }
  } catch (err) {
    showAlert("err", err.response.data.message);
    console.log(err.response);
  }
};
exports.admission = async () => {
  try {
    const response = await axios({
      method: "POST",
      url: "https://chandraacademysonepur.com/admission",

      httpOnly: true,
    });
    console.log(response.data);

    if (response.data.status === "success") {
      showAlert("success", "admission start");
      window.setTimeout(() => {
        location.assign(`/admission/${response.data.admission.id}/page1`);
      }, 1000);
    }
  } catch (err) {
    showAlert("err", err.response.data.message);
    console.log(err.response);
  }
};

exports.admission1 = async (name, phone, studentclass, dob, gender, adhar) => {
  const admissionId = window.location.pathname.split("/")[2];
  console.log(admissionId);
  try {
    const response = await axios({
      method: "POST",
      url: `https://chandraacademysonepur.com/admission/${admissionId}/page1`,
      data: {
        name,
        phone,
        studentclass,
        dob,
        gender,
        adhar,
      },
      httpOnly: true,
    });
    console.log(response.data);

    if (response.data.status === "success") {
      showAlert("success", "page1 completed");
      window.setTimeout(() => {
        location.assign(`/admission/${admissionId}/page2`);
      }, 1000);
    }
  } catch (err) {
    showAlert("err", "admission failed");
    console.log(err);
  }
};

exports.admission2 = async (
  nationallity,
  religion,
  catagory,
  fatherName,
  motherName
) => {
  const admissionId = window.location.pathname.split("/")[2];
  console.log(admissionId);
  try {
    const response = await axios({
      method: "POST",
      url: `https://chandraacademysonepur.com/admission/${admissionId}/page2`,
      data: {
        nationallity,
        religion,
        catagory,
        fatherName,
        motherName,
      },
      httpOnly: true,
    });
    console.log(response.data);

    if (response.data.status === "success") {
      showAlert("success", "page2 completed");
      window.setTimeout(() => {
        location.assign(`/admission/${admissionId}/page3`);
      }, 1000);
    }
  } catch (err) {
    showAlert("err", "admission failed");
    console.log(err);
  }
};
exports.admission3 = async (
  village,
  postOffice,
  policeStation,
  pin,
  dist,
  transport,
  stay
) => {
  const admissionId = window.location.pathname.split("/")[2];
  console.log(admissionId);
  try {
    const response = await axios({
      method: "POST",
      url: `https://chandraacademysonepur.com/admission/${admissionId}/page3`,
      data: {
        village,
        postOffice,
        policeStation,
        pin,
        dist,
        transport,
        stay,
      },
      httpOnly: true,
    });
    console.log(response.data);

    if (response.data.status === "success") {
      showAlert("success", "finished");
      window.setTimeout(() => {
        location.assign(`/admission/${admissionId}`);
      }, 1000);
    }
  } catch (err) {
    showAlert("err", "admission failed");
    console.log(err);
  }
};
