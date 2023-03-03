// the map doesnt look mappish enough. Its too clumsy and has, lets say, tiny islands.
// currently exploring algorithms which seem to be able to cure my world.

const canvas = document.getElementById("cnvs");
const ctx = canvas.getContext("2d");

canvas.width = 600;
canvas.height = 500;

// set up the tile size and number of columns and rows
const tileSize = 16;
const numCols = Math.floor(canvas.width / tileSize);
const numRows = Math.floor(canvas.height / tileSize);

let tileMap = [];

// set up hex values for colors
const colors = {
  grass: "#A0D995",
  water: "#4CACBC",
  flower: "#A3A7E4",
  cat: "",
  sand: "",
};

// loop through each tile and randomly assign a tile type
for (let row = 0; row < numRows; row++) {
  tileMap[row] = [];
  for (let col = 0; col < numCols; col++) {
    const tilePercentage = Math.floor(Math.random() * 100);
    tileMap[row][col] = tilePercentage;
  }
}

// draw
// every time i write an ifelse block a hamster dies
for (let row = 0; row < numRows; row++) {
  for (let col = 0; col < numCols; col++) {
    const tileType = tileMap[row][col];
    let color;
    if (tileType > 20) {
      // 30% grass probability
      let ItemInGrass = Math.floor(Math.random() * 100);
      // 10% flower probability in 30% grass
      if (ItemInGrass < 12) {
        color = colors.flower; // purple for flowers
      } else {
        color = colors.grass; // green for grass
      }
    } else {
      color = colors.water; // blue for water
    }

    ctx.fillStyle = color;
    ctx.fillRect(col * tileSize, row * tileSize, tileSize, tileSize);
  }
}
