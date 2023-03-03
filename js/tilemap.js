const tileSize = 16;
const noiseScale = 0.1;

const colors = [
  "#5E6073", //flower
  "#A0D995", //grass
  "#F5F0BB", //sand
  "#73A9AD", //water
];
// 20% flowers in 40% grass in 50% sand in 100% water
let proportions = [0.2, 0.4, 0.5, 1];

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
  createCanvas(1080, 720);
  cols = width / tileSize;
  rows = height / tileSize;

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
        (col / 2) * tileSize - xRO,
        (row / 2) * tileSize - yRO,
        tileSize,
        tileSize
      );
    }
  }
}

function getTile(x, y, terrainScales) {
  let v = noise((xTO + x) * noiseScale, (yTO + y) * noiseScale);
  for (let i = 0; i < proportions.length; i++) {
    let terrainScale = proportions[i];
    if (v <= terrainScale) {
      return colors[i];
    }
  }
}

function draw() {
  clear();
  drawTerrain();
}
