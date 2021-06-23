/*
Create an application wioth the following  roles:
admin - gets full access
subadmin - gets access to create/delete courses
testprep - gets access to consume content
user - gets access to consume content
*/



let user = "testprep";  //can change this variable to any of the cases

switch (user) {
  case "admin":
    console.log("You get full access");
    break;
  case "subadmin":
    console.log("Can create/delete course");
    break;
    case "testprep":
    console.log("access to consume content")
    break;
  case "user":
    console.log("You do not have full access");
    break;

  default:         //when nothing matches
    console.log("Trial user");
}
