// show user a signout button if he is authenticated
// otherwise show him option to login/signup

let authenticated = false;

let newFunction = () => authenticated ? console.log("welcome") : console.log("get out!");


newFunction();