const uid = "abc123";

let fullName = "valerie gutierrez";
let email = "valtallica@gmail.com";
let password = "cbashj^7";
let confirmPassword = "cbashj^7";
let courseCount = 0;
let loggedInFromGoogle = false;

let user = (name) => {

    if (fullName === name.toLowerCase()) {
        console.log(`Welcome ${fullName}!`);
    }
}
user("vAleRie gutierrez")