let width = 7;

// make an 2d array

function makeGrid(width) {
  return Array(width)
    .fill()
    .map(() => Array(width));
}

const tiles = {
  sea: "🟦",
  sand: "🟨",
  grass: "🟩",
  tree: "🌴",
  cat: "🐱",
};

// pick a random property from an objec
// return its index, key, and value
const randomProperty = (object) => {
  const keys = Object.keys(object);
  if (keys.length > 0) {
    const index = Math.floor(keys.length * Math.random());
    const key = keys[index];
    const value = object[key]; // we will need this to randomly collapse
    return { index, key, value }; // our empty grid
  }
  return null;
};

let arr = makeGrid(width);

function randomCollapse(tiles, grid) {
  randX = Math.floor(grid.length * Math.random());
  randY = Math.floor(grid.length * Math.random());
  randTile = randomProperty(tiles).value;
  grid[randY][randX] = randTile;
  return grid;
}

const randProp = randomProperty(tiles).value;
console.log(randProp);
arr = randomCollapse(tiles, arr);
console.log(arr);
