let changeSpeed = 20;

function checkKey(key) {
  if (key == " ") {
    noiseSeed(millis());
    drawTerrain();
  }
  if (key === "w") {
    y -= changeSpeed;
  }
  if (key === "s") {
    y += changeSpeed;
  }
  if (key === "a") {
    x -= changeSpeed;
  }
  if (key === "d") {
    x += changeSpeed;
  }
}

function updateMap() {
  if (keyIsPressed) {
    checkKey(key);
  }
}
