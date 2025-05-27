console.log("Solar System Practice");

// to get a bunch of postions and sizes randomly for the CSS shadow box for the star effect, this is going to be needed to turned into a componenet that can then be randomly generated on init
const outPut = document.querySelector("#funStuff");

//random postion for planet initial placement:
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
};


const STAR_COUNT = 500;
const starField = document.querySelector('.stars');

for (let i = 0; i < STAR_COUNT; i++) {
  const star = document.createElement('div');
  star.className = 'star';
  star.style.left = `${Math.random() * 100}vw`;
  star.style.top = `${Math.random() * 100}vh`;

  // Set random size between 1 and 3 pixels
  const starSize = Math.floor(Math.random() * 3) + 1;
  star.style.width = `${starSize}px`;
  star.style.height = `${starSize}px`;

  // Set random box shadow with adjusted values for roundness
  const boxShadow = `${Math.random() * 2 - 1}px ${Math.random() * 2 - 1}px 2px #fff`;
  star.style.boxShadow = boxShadow;

  starField.appendChild(star);
}

//orbit logic

const sunX = window.innerWidth / 2 - 100;
const sunY = window.innerHeight / 2 - 100;

const sun = document.querySelector('.sun');
sun.style.left = `${sunX}px`;
sun.style.top = `${sunY}px`;

const sunWidth = 200;
const sunHeight = 200;

const sunCenterX = sunX + sunWidth / 2;
const sunCenterY = sunY + sunHeight / 2;

// console.log(`Sun Center X: ${sunCenterX}px`); //center of the sun in pixels for the orbit rotation. 
// console.log(`Sun Center Y: ${sunCenterY}px`);

const mercury = {
  speed: 0.013,
  theta: randomNumber(0, Math.PI),
  radius: 133,
  zIndex: 1,
  A: 2.05, //width of elipse ¯\_(ツ)_/¯
  B: .39, // height of elipse
  element: document.querySelector('.mercury'),
}

const venus = {
  speed: 0.0111,
  theta: randomNumber(0, Math.PI),
  radius: 143,
  zIndex: 2,
  A: 2.13, //width of elipse ¯\_(ツ)_/¯
  B: .40, // height of elipse
  element: document.querySelector('.venus'),
}

const earth = {
  speed: 0.009,
  theta: randomNumber(0, Math.PI),
  radius: 153,
  zIndex: 3,
  A: 2.33, //width of elipse ¯\_(ツ)_/¯
  B: .41, // height of elipse
  element: document.querySelector('.earth'),
}

const mars = {
  speed: 0.0085,
  theta: randomNumber(0, Math.PI),
  radius: 169,
  zIndex: 4,
  A: 2.43, //width of elipse ish ¯\_(ツ)_/¯
  B: .42, // height of elipse
  element: document.querySelector('.mars'),
}

const jupiter = {
  speed: 0.007,
  theta: randomNumber(0, Math.PI),
  radius: 179,
  zIndex: 5,
  A: 2.53, //width of elipse ish ¯\_(ツ)_/¯
  B: .43, // height of elipse
  element: document.querySelector('.jupiter'),
}

const saturn = {
  speed: 0.0065,
  theta: randomNumber(0, Math.PI),
  radius: 189,
  zIndex: 6,
  A: 2.63, //width of elipse ish ¯\_(ツ)_/¯
  B: .43, // height of elipse
  element: document.querySelector('.saturn'),
}

const uranus = {
  speed: 0.005,
  theta: randomNumber(0, Math.PI),
  radius: 199,
  zIndex: 7,
  A: 2.73, //width of elipse
  B: .44, // height of elipse
  element: document.querySelector('.uranus'),
}

const neptune = {
  speed: 0.004,
  theta: randomNumber(0, Math.PI),
  radius: 209,
  zIndex: 8,
  A: 2.83, //width of elipse
  B: .45, // height of elipse
  element: document.querySelector('.neptune'),
}

const pluto = {
  speed: 0.003,
  theta: randomNumber(0, Math.PI),
  radius: 219,
  zIndex: 9,
  A: 2.93, //width of elipse
  B: .46, // height of elipse
  element: document.querySelector('.pluto'),
}

function update(planet) {
  planet.theta += planet.speed;

  const planetX = planet.A * Math.cos(planet.theta) * planet.radius + sunX + 100;
  const planetY = planet.B * Math.sin(planet.theta) * planet.radius + sunY + 100;

  const dynamicY = sunY + 100; 

  planet.element.style.left = `${planetX}px`;
  planet.element.style.top = `${planetY}px`;

  if(planetY > dynamicY){
    planet.element.style.zIndex = planet.zIndex;
  }else{
    planet.element.style.zIndex = -1 * planet.zIndex;
  }
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
