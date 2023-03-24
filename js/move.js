let changeSpeed = 20;

function checkKey(key) {
  if (key === "w") {
    walkerY -= changeSpeed;
  }
  if (key === "s") {
    walkerY += changeSpeed;
  }
  if (key === "a") {
    walkerX -= changeSpeed;
  }
  if (key === "d") {
    walkerX += changeSpeed;
  }
}

function updateMap() {
  if (keyIsPressed) {
    checkKey(key);
  }
}

function moveWalker() {
  image(walker, walkerX, walkerY); //walkerX, walkerY);
  updateMap();
  console.log(walkerX, walkerY);
}