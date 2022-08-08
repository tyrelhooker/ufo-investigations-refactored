// Create the canvas and attaches to html
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
ctx.globalCompositeOperation = "lighter";
canvas.width = 650;
canvas.height = 350;

// Height and width of canvas 
var canvasWidth = 650;
var canvasHeight = 350;

// The variable to hold the setInterval() in game to clear the interval
var frameRateId;

function outcomeInit() {
  playerURL;
  ufoURL;
  window.requestAnimationFrame(start);
}

function start() {
  frameRateId = setInterval(draw, 100);
}

function draw() {
  ufo.speed = 9;
  updateFrame();
  ctx.drawImage(moscowURL, 0, 0, 650, 350);
  ctx.drawImage(ufoURL, ufo.srcx, ufo.srcy, ufo.srcWidth, ufo.srcHeight, ufo.dx, ufo.dy, ufo.dWidth, ufo.dHeight);
  ctx.drawImage(playerURL, player.srcx, player.srcy, player.srcWidth, player.srcHeight, player.dx, player.dy, player.srcWidth, player.srcHeight);
}

// Splitting into separate sprite functions to update sprite frames from sprite sheet and animate across page.
function updateFrame() {
  updateUFO();
  updatePlayer();
}

// Move UFO across full Screen and stops in middle above player
function updateUFO() {
  // Updates the frame index
  ufo.srcCurFrame = ++ufo.srcCurFrame % ufo.srcTotFrame;
  // Calculates the x coordinate for spritesheet
  ufo.srcx = ufo.srcCurFrame * ufo.srcWidth;
  // Clear already drawn sprite before new sprite renders
  ctx.clearRect(ufo.dx, ufo.dy, ufo.dWidth, ufo.dHeight);
  // Movement logic
  if (ufo.dirRight && ufo.dx < canvasWidth - ufo.srcWidth) {
    ufo.dx += ufo.speed;
  }
  else if (ufo.dx > (canvasWidth - ufo.srcWidth) / 2) {
    ufo.dirRight = false;
    ufo.dirLeft = true;
    ufo.dx -= ufo.speed;
  }
  else {
    ufo.dirRight = false;
    ufo.dirLeft = false;
  }
}

// Moves the player from left side to middle of canvas
function updatePlayer() {
  // Updates the frame index
  player.srcCurFrame = ++player.srcCurFrame % player.srcTotFrame;
  // Calculates the x coordinate for spritesheet
  player.srcx = player.srcCurFrame * player.srcWidth;
  // Clear already drawn sprite before new sprite renders
  ctx.clearRect(player.dx, player.dy, player.srcWidth, player.srcHeight);
  // Movement logic
  if (player.dirRight && player.dx < (canvasWidth - player.srcWidth) / 2) {
    player.dx += player.speed;
  }
  else { 
    player.dx = (canvasWidth - player.srcWidth) / 2;
    player.dirRight = false;
    player.srcCurFrame = 0;
    player.srcx = 0;
    player.srcy = 0;
    player.srcTotFrame = 1;
  }
}

function roundUpdatePlayer() {
  // Updates the frame index
  player.srcCurFrame = ++player.srcCurFrame % player.srcTotFrame;
  // Calculates the x coordinate for spritesheet
  player.srcx = player.srcCurFrame * player.srcWidth;
  // Clear already drawn sprite before new sprite renders
  ctx.clearRect(player.dx, player.dy, player.srcWidth, player.srcHeight);
  // Movement logic
  if (player.dirRight && player.dx < ((canvasWidth - 200) - player.srcWidth) / 2) {
    player.dx += player.speed;
  }
  else { 
    player.dx = ((canvasWidth - 200) - player.srcWidth) / 2;
    player.dirRight = false;
    player.srcCurFrame = 0;
    player.srcx = 0;
    player.srcy = 0;
    player.srcTotFrame = 1;
  }
}

function stopInterval() {
  clearInterval(frameRateId);
}