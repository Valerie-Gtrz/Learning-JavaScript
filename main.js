
//  let courseName = "React JS Bootcamp";
//  let isLoggedIn = true;
// let loggedcount = 34;
// let paymentMode;
// paymentMode = "Credit";

// console.log(`The payment type is : ${paymentMode}`);

// const features = {
//         eyes: "brown",
//         mouth: "thin",
//         nose: "long"
//     };

//     const {eyes, mouth, nose} = features;  //simple destructuring. you can also use this technique for arrays

//     console.log(nose); //now i can use nose here as a variable

let beautifulGirl = "Valerie";

const allFeatures = [
  {
    face: {
      eyes: "brown",
      mouth: "thin",
      nose: "long",
    },
    body: {
      height: "5,5",
      weight: "175",
      shape: "hourglass",
    },
  },
];
const [{face}] = allFeatures;

console.log(face);
