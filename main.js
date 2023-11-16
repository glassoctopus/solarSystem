console.log("Solar System Practice");

// to get a bunch of podtions and sizes randomly for the CSS shadow box for the star effect, this is going to be needed to turned into a componenet that can then be randomly generated on init
const outPut = document.querySelector("#funStuff");

//random postion for star generation:
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
};


const STAR_COUNT = 500;
let starString = "";

for (let i = 0; i < STAR_COUNT; i++) {
  starString += `${randomNumber(-500, 500)}vw ${randomNumber(-500, 500)}vh ${randomNumber(0, 3)}px ${randomNumber(0, 3)}px #fff,`;
}

starString = starString.slice(0, -1);

const starField = document.querySelector('.stars');
starField.style.boxShadow = starString;

//orbit logic

const sunX = window.innerWidth / 2 - 100;
const sunY = window.innerHeight / 2 - 100;

const sun = document.querySelector('.sun');
sun.style.left = `${sunX}px`;
sun.style.top = `${sunY}px`;

const mercury = {
  speed: 0.013,
  theta: randomNumber(0, Math.PI),
  radius: 133,
  zIndex: 1,
  A: 1.75, //width of elipse ¯\_(ツ)_/¯
  B: .29, // height of elipse
  element: document.querySelector('.mercury'),
}

const venus = {
  speed: 0.0111,
  theta: randomNumber(0, Math.PI),
  radius: 143,
  zIndex: 2,
  A: 2.13, //width of elipse ¯\_(ツ)_/¯
  B: .30, // height of elipse
  element: document.querySelector('.venus'),
}

const earth = {
  speed: 0.009,
  theta: randomNumber(0, Math.PI),
  radius: 153,
  zIndex: 3,
  A: 2.33, //width of elipse ¯\_(ツ)_/¯
  B: .31, // height of elipse
  element: document.querySelector('.earth'),
}

const mars = {
  speed: 0.0085,
  theta: randomNumber(0, Math.PI),
  radius: 169,
  zIndex: 4,
  A: 2.43, //width of elipse ish ¯\_(ツ)_/¯
  B: .32, // height of elipse
  element: document.querySelector('.mars'),
}

const jupiter = {
  speed: 0.007,
  theta: randomNumber(0, Math.PI),
  radius: 179,
  zIndex: 5,
  A: 2.53, //width of elipse ish ¯\_(ツ)_/¯
  B: .33, // height of elipse
  element: document.querySelector('.jupiter'),
}

const saturn = {
  speed: 0.0065,
  theta: randomNumber(0, Math.PI),
  radius: 189,
  zIndex: 6,
  A: 2.63, //width of elipse ish ¯\_(ツ)_/¯
  B: .33, // height of elipse
  element: document.querySelector('.saturn'),
}

const uranus = {
  speed: 0.005,
  theta: randomNumber(0, Math.PI),
  radius: 199,
  zIndex: 7,
  A: 2.73, //width of elipse
  B: .33, // height of elipse
  element: document.querySelector('.uranus'),
}

const neptune = {
  speed: 0.004,
  theta: randomNumber(0, Math.PI),
  radius: 209,
  zIndex: 8,
  A: 2.83, //width of elipse
  B: .33, // height of elipse
  element: document.querySelector('.neptune'),
}

const pluto = {
  speed: 0.003,
  theta: randomNumber(0, Math.PI),
  radius: 219,
  zIndex: 9,
  A: 2.93, //width of elipse
  B: .33, // height of elipse
  element: document.querySelector('.pluto'),
}

function update(planet) {
  planet.theta += planet.speed;
  planet.element.style.left = `${planet.A * Math.cos(planet.theta) * planet.radius + sunX + 100}px`;
  // console.log("left = ", planet.el.style.left);
  // console.log("offset X = ", planet.radius + sunX + 100);
  // console.log("difference X = ",(planet.radius + sunX + 100) - (planet.B * Math.sin(planet.theta) * planet.radius + sunY + 100));
  planet.element.style.top = `${planet.B * Math.sin(planet.theta) * planet.radius + sunY + 100}px`;
  // console.log(planet.B * Math.sin(planet.theta) * planet.radius + sunY + 100 > 420);
  if((planet.B * Math.sin(planet.theta) * planet.radius + sunY + 100) > 420){
    planet.element.style.zIndex = planet.zIndex;
  }else{
    planet.element.style.zIndex = -1 * planet.zIndex;
  }
  // console.log("top = ", planet.el.style.top);
  // console.log("offset Y = ", planet.radius + sunY + 100);
  // console.log("difference Y = ", (planet.radius + sunY + 100) - (planet.B * Math.sin(planet.theta) * planet.radius + sunY + 100));
  
}

setInterval(() => {
  update(mercury);
  update(venus);
  update(earth);
  update(mars);
  update(jupiter);
  update(saturn);
  update(uranus);
  update(neptune);
  update(pluto);
}, 10);
