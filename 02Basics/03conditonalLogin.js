// Allow user to access course if:
// logged in from email
// logged in from logged in from Google
// logged in from Facebook

let email = false;
let facebook = false;
let google = false;

if (email || facebook || google) {
  console.log("Login Success");
} else {
  console.log("Login Failed");
}
