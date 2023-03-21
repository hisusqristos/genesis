const tileSize = 8;
const noiseScale = 0.1;
const buffer = 1;

let walker;
let walkerX, walkerY;

function preload() {
  walker = loadImage("../images/milashka.png");
  // walker = walker.resize(40, 40);
}

const colors = {
  flower: "#E96479",
  tree: "#698269",
  mud: "#B99B6B",
  grass: "#A0D995",
  sand: "#F5F0BB",
  water: "#73A9AD",
};

let proportions = {
  grass: 0.4,
  forest: 0.47,
  sand: 0.5,
  water: 1,
};

var x = 0;
var y = 0;
var cols = 0;
var rows = 0;
var xRO = 0;
var yRO = 0;
var xTO = 0;
var yTO = 0;

const tiles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  cols = width / tileSize + buffer;
  rows = height / tileSize + buffer;

  noStroke();
  drawTerrain();
}

function drawTerrain() {
  xRO = x % tileSize;
  yRO = y % tileSize;
  xTO = parseInt(x / tileSize);
  yTO = parseInt(y / tileSize);
  for (let col = 0; col < cols; col++) {
    for (let row = 0; row < rows; row++) {
      tiles[col + row * cols] = getTile(col, row);
    }
  }

  for (let col = 0; col < cols; col++) {
    for (let row = 0; row < rows; row++) {
      fill(tiles[col + row * cols]);
      rect(
        (col - buffer / 2) * tileSize - xRO,
        (row - buffer / 2) * tileSize - yRO,
        tileSize,
        tileSize
      );
    }
  }
}

function getTile(x, y) {
  let v = noise((xTO + x) * noiseScale, (yTO + y) * noiseScale);
  for (let proportionKey in proportions) {
    let proportion = proportions[proportionKey];
    if (v <= proportion) {
      const color = pickColor(proportion);
      return color;
    }
  }
}

function pickColor(proportion) {
  let color = "#FF0000"; // let default be red, so we recognize the error
  switch (proportion) {
    case proportions.grass:
      let rand = random(100);
      if (rand < 3) {
        // 3% flower probability
        color = colors.flower;
      } else {
        color = colors.grass;
      }
      break;
    case proportions.forest:
      let rand2 = random(100);
      if (rand2 < 30) {
        color = colors.tree;
      } else {
        color = colors.mud;
      }
      break;
    case proportions.sand:
      color = colors.sand;
      break;
    case proportions.water:
      color = colors.water;
      break;
  }
  return color;
}

async function draw() {
  clear();
  noLoop();
  await drawTerrain();
  image(walker, 0, 0);
}
