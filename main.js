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

const sunX = window.innerWidth / 2 - 100;
const sunY = window.innerHeight / 2 - 100;

const sun = document.querySelector('.sun');
sun.style.left = `${sunX}px`;
sun.style.top = `${sunY}px`;

const mercury = {
  speed: 0.013,
  theta: randomNumber(0, Math.PI),
  radius: 133,
  A: 1.75, //width of elipse
  B: .29, // height of elipse
  el: document.querySelector('.mercury'),
}

const venus = {
  speed: 0.0115,
  theta: randomNumber(0, Math.PI),
  radius: 143,
  A: 2.13, //width of elipse
  B: .39, // height of elipse
  el: document.querySelector('.venus'),
}

const earth = {
  speed: 0.0115,
  theta: randomNumber(0, Math.PI),
  radius: 153,
  A: 2.33, //width of elipse
  B: .41, // height of elipse
  el: document.querySelector('.earth'),
}

function update(planet) {
  planet.theta += planet.speed;
  planet.el.style.left = `${planet.A * Math.cos(planet.theta) * planet.radius + sunX + 100}px`;
  // console.log("left = ", planet.el.style.left);
  // console.log("offset X = ", planet.radius + sunX + 100);
  // console.log("difference X = ",(planet.radius + sunX + 100) - (planet.B * Math.sin(planet.theta) * planet.radius + sunY + 100));
  planet.el.style.top = `${planet.B * Math.sin(planet.theta) * planet.radius + sunY + 100}px`;
  // console.log(planet.B * Math.sin(planet.theta) * planet.radius + sunY + 100 > 420);
  if((planet.B * Math.sin(planet.theta) * planet.radius + sunY + 100) > 420){
    planet.el.style.zIndex = 1;
  }else{
    planet.el.style.zIndex = -1;
  }
  // console.log("top = ", planet.el.style.top);
  // console.log("offset Y = ", planet.radius + sunY + 100);
  // console.log("difference Y = ", (planet.radius + sunY + 100) - (planet.B * Math.sin(planet.theta) * planet.radius + sunY + 100));
  
}

setInterval(() => {
  update(mercury);
  update(venus);
  update(earth);
}, 10);
