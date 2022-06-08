
//created a function for username.  the function accepted a string with a default value of "stranger".  if a string was not applied returned invalid
function promptForUsername(username = "stranger") {
    if (typeof username === "number") {
    console.log("enter valid name")
    }
    return username
}

//this is our inventory for our egoBoost program test
const prefix = ["you"];
const middle = ["look great","will have a great day"];
const suffix = ["today!"," "];

//created a random number generator for selecting a random element from each of our arrays above.
let rngPrefix = Math.floor(Math.random() * prefix.length);
let rngMiddle = Math.floor(Math.random() * middle.length);
let rngSuffix = Math.floor(Math.random() * suffix.length);

//this function will string interpolate an element from each of our arrays to form our ego boosting message
 const egoBoost = () => {
    console.log(`${promptForUsername("Patrick")} ${prefix[rngPrefix]} ${middle[rngMiddle]} ${suffix[rngSuffix]}`)
}

egoBoost();