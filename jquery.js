// let authenticated = null;
// let accountType = null;

// $(document).ready(function () {
//   // const signPetition = $(".sign-petition");
//   const signInBtn = $(".sign-in-btn");
//   const signUpBtn = $(".sign-up-btn");
//   const dashboardBtn = $(".dashboard-btn");
//   const adminDashboardBtn = $(".admin-dashboard-btn");

//   if (authenticated === true && accountType === "admin") {
//     adminDashboardBtn.css("display", "unset");
//     // signPetition.css("display", "unset");
//     dashboardBtn.css("display", "none");
//     signInBtn.css("display", "none");
//     signUpBtn.css("display", "none");
//   } else if (authenticated === true && accountType === "member") {
//     dashboardBtn.css("display", "unset");
//     // signPetition.css("display", "unset");
//     adminDashboardBtn.css("display", "none");
//     signInBtn.css("display", "none");
//     signUpBtn.css("display", "none");
//   } else {
//     adminDashboardBtn.css("display", "none");
//     dashboardBtn.css("display", "none");
//     // signPetition.css("display", "none");
//   }
// });

// // const form = document.querySelector("#myform");
// // const usersAccountsData =
// //   JSON.parse(localStorage.getItem("usersAccountsData")) || [];

// // form.addEventListener("submit", function (event) {
// //   event.preventDefault(); // Prevent form submission

// //   const formData = new FormData(form);
// //   const userData = {};
// //   formData.forEach((value, key) => {
// //     userData[key] = value;
// //   });

// //   usersAccountsData.push(userData);
// //   localStorage.setItem("usersAccountsData", JSON.stringify(usersAccountsData));

// //   console.log("Form submitted!");
// //   console.log("User data:", userData);
// //   console.log("All users data:", usersAccountsData);
// // });

// const loginForm = document.getElementById("login-form");

// const AccountsData =
//   JSON.parse(localStorage.getItem("usersAccountsData")) || [];

// loginForm.addEventListener("submit", function (event) {
//   event.preventDefault(); // Prevent form submission

//   const formData = new FormData(loginForm);
//   const email = formData.get("email");
//   const password = formData.get("password");

//   const user = AccountsData.find((user) => user.email === email);

//   if (user) {
//     if (user.password === password) {
//       console.log("Login successful!");
//       // You can perform further actions here upon successful login
//       // For example, redirect the user to another page
//     } else {
//       console.log("Incorrect password. Please try again.");
//     }
//   } else {
//     console.log("Account not found. Please register first.");
//   }
// });
