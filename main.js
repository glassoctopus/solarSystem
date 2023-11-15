console.log("Solar System Practice");

// to get a bunch of podtions and sizes randomly for the CSS shadow box for the star effect, this is going to be needed to turned into a componenet that can then be randomly generated on init
const outPut = document.querySelector("#funStuff");

//random postion for star generation:
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
};

const STAR_COUNT = 500
let result = ""
for(let i = 0; i < STAR_COUNT; i++){
  result += `${randomNumber(-500, 500)}vw ${randomNumber(-500, 500)}vh ${randomNumber(0, 3)}px ${randomNumber(0, 3)}px #fff,`
};
// console.log(result.substring(0, result.length - 1));
// outPut.innerHTML = result;
