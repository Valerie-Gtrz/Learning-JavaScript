function getUserRole (name, role) {
    switch (role) {
        case "admin":
            return `${name} is admin with all access.`;
            break;  //when we use return we dont need as brreak because fxns stop at return statements
            case "subadmin":
            return `${name} is a sub-admin with access to create and delete.`;
            break;
            case "testprep":
            return `${name} is a test-prep with access to create and delete tests.`;
            break;
            case "user":
            return `${name} is a user with access to consume content.`;
            break;
            default:
                return`${name} is a trial user with acces to free content only.` ;
    }
}

// console.log(getUserRole ("Val", "subadmin"));

let getRole = getUserRole("Verginya", "trial");

console.log(getRole);