function ufoSiteInit() {
  playerURL;
  moscowURL;
  window.requestAnimationFrame(drawUFOsite);
}

function drawUFOsite() {
  ctx.drawImage(moscowURL, 0, 0, 650, 350);
  ctx.drawImage(playerURL, 0, 376, player.srcWidth, player.srcHeight, 0, 260, player.srcWidth, player.srcHeight);
}

function lostForestSceneInit() {
  playerURL;
  darkForestURL;
  window.requestAnimationFrame(startLostForestScene);
}

function startLostForestScene() {
  frameRateId = setInterval(drawLostForestScene, 50);
}

function drawLostForestScene() {
  lostForestLoop();
  player.dy = 250;
  ctx.drawImage(darkForestURL, 0, 0, 650, 350);
  ctx.drawImage(playerURL, player.srcx, player.srcy, player.srcWidth, player.srcHeight, player.dx, player.dy, player.srcWidth, player.srcHeight);
}

function lostForestLoop() {
  player.srcCurFrame = ++player.srcCurFrame % player.srcTotFrame;
  player.srcx = player.srcCurFrame * player.srcWidth;
  ctx.clearRect(player.dx, player.dy, player.dWidth, player.dHeight);
  if (player.dirRight && player.dx < 640) {
    player.dx += player.speed;
  } else {
    stopInterval();
  }
};

function alienSpottedInit() {
  playerURL;
  ufoURL;
  window.requestAnimationFrame(alienSpottedStart);
}

function alienSpottedStart() {
  frameRateId = setInterval(drawAlienSpotted, 50);
}

function drawAlienSpotted() {
  ufo.speed = 10;
  ufo.dx = 500;
  ufo.dy = 20;
  spinningUFO();
  ctx.drawImage(moscowURL, 0, 0, 650, 350);
  ctx.drawImage(ufoURL, ufo.srcx, ufo.srcy, ufo.srcWidth, ufo.srcHeight, ufo.dx, ufo.dy, ufo.dWidth, ufo.dHeight);
  ctx.drawImage(playerURL, 90, 376, player.srcWidth, player.srcHeight, 50, 260, player.srcWidth, player.srcHeight);
}

function spinningUFO() {
  ufo.srcCurFrame = ++ufo.srcCurFrame % ufo.srcTotFrame;
  ufo.srcx = ufo.srcCurFrame * ufo.srcWidth;
  // Clear already drawn sprite before new sprite renders
  ctx.clearRect(ufo.dx, ufo.dy, ufo.dWidth, ufo.dHeight);
}

function alienEvidenceInit() {
  playerURL;
  ufoURL;
  cropCircleURL;
  window.requestAnimationFrame(alienEvidenceStart);
}

function alienEvidenceStart() {
  frameRateId = setInterval(drawAlienEvidence, 50);
}

function drawAlienEvidence() {
  updatePlayer();
  ctx.drawImage(cropCircleURL, 0, 0, 650, 350);
  ctx.drawImage(playerURL, player.srcx, player.srcy, player.srcWidth, player.srcHeight, player.dx, player.dy, player.srcWidth, player.srcHeight);
}

function sneakAroundInit() {
  playerURL;
  ufoURL;
  moscowURL;
  window.requestAnimationFrame(sneakAroundStart);
}

function sneakAroundStart() {
  frameRateId = setInterval(drawSneakAround, 50);
}

function drawSneakAround() {
  ufo.speed = 10;
  updateUFO();
  updatePlayer();
  ctx.drawImage(moscowURL, 0, 0, 650, 350);
  ctx.drawImage(ufoURL, ufo.srcx, ufo.srcy, ufo.srcWidth, ufo.srcHeight, ufo.dx, ufo.dy, ufo.dWidth, ufo.dHeight);
  ctx.drawImage(playerURL, player.srcx, player.srcy, player.srcWidth, player.srcHeight, player.dx, player.dy, player.srcWidth, player.srcHeight);
}

function spottedInit() {
  playerURL;
  ufoURL;
  moscowURL;
  window.requestAnimationFrame(spottedStart);
}

function spottedStart() {
  frameRateId = setInterval(draw, 100);
}

function fightInit() {
  playerShootingURL;
  ufoURL;
  window.requestAnimationFrame(fightStart);
}

function fightStart() {
  frameRateId = setInterval(drawFight, 50);
}

function drawFight() {
  ufo.speed = 10;
  ufo.dx = 500;
  ufo.dy = 220;
  spinningUFO();
  playerFighting();
  ctx.drawImage(moscowURL, 0, 0, 650, 350);
  ctx.drawImage(ufoURL, ufo.srcx, ufo.srcy, ufo.srcWidth, ufo.srcHeight, ufo.dx, ufo.dy, ufo.dWidth, ufo.dHeight);
  ctx.drawImage(playerShootingURL, playerShooting.srcx, playerShooting.srcy, playerShooting.srcWidth, playerShooting.srcHeight, playerShooting.dx, playerShooting.dy, playerShooting.srcWidth, playerShooting.srcHeight);
}

function playerFighting() {
  playerShooting.srcCurFrame = ++playerShooting.srcCurFrame %playerShooting.srcTotFrame;
  playerShooting.srcx =playerShooting.srcCurFrame *playerShooting.srcWidth;
  // Clear already drawn sprite before new sprite renders
  ctx.clearRect(playerShooting.dx, playerShooting.dy, playerShooting.dWidth, playerShooting.dHeight);
}

function injuredInit() {
  playerInjuredURL;
  ufoURL;
  window.requestAnimationFrame(injuredStart);
}

function injuredStart() {
  frameRateId = setInterval(drawInjured, 500);
}

function drawInjured() {
  ufo.speed = 10;
  ufo.dx = 500;
  ufo.dy = 220;
  playerInjured.srcWidth = 80;
  playerInjured.srcx = 240;
  spinningUFO();
  playerInjury();
  ctx.drawImage(moscowURL, 0, 0, 650, 350);
  ctx.drawImage(ufoURL, ufo.srcx, ufo.srcy, ufo.srcWidth, ufo.srcHeight, ufo.dx, ufo.dy, ufo.dWidth, ufo.dHeight);
  ctx.drawImage(playerInjuredURL, playerInjured.srcx, playerInjured.srcy, playerInjured.srcWidth, playerInjured.srcHeight, playerInjured.dx, playerInjured.dy, playerInjured.srcWidth, playerInjured.srcHeight);
}

function playerInjury() {
  playerInjured.srcCurFrame = ++playerInjured.srcCurFrame % playerInjured.srcTotFrame;
  playerInjured.srcx = playerInjured.srcCurFrame * playerInjured.srcWidth;
  // Clear already drawn sprite before new sprite renders
  ctx.clearRect(playerInjured.dx, playerInjured.dy, playerInjured.dWidth, playerInjured.dHeight);
  if (playerInjured.srcCurFrame >= 4) {
    playerInjured.srcx = 500;
    playerInjured.srcy = 282;
    playerInjured.srcWidth = 100;
    stopInterval();
  }
}

function negotiateInit() {
  playerURL;
  ufoURL;
  window.requestAnimationFrame(negotiateStart);
}

function negotiateStart() {
  frameRateId = setInterval(drawNegotiate, 50);
}

function drawNegotiate() {
  ufo.speed = 10;
  ufo.dx = 400;
  ufo.dy = 200;
  spinningUFO();
  ctx.drawImage(moscowURL, 0, 0, 650, 350);
  ctx.drawImage(ufoURL, ufo.srcx, ufo.srcy, ufo.srcWidth, ufo.srcHeight, ufo.dx, ufo.dy, ufo.dWidth, ufo.dHeight);
  ctx.drawImage(playerURL, 240, 94, player.srcWidth, player.srcHeight, 250, 260, player.srcWidth, player.srcHeight);
}

function abductInit() {
  playerURL;
  ufoURL;
  window.requestAnimationFrame(abductStart);
}

function abductStart() {
  frameRateId = setInterval(drawAbduct, 50);
}

function drawAbduct() {
  ufo.speed = 10;
  ufo.dx = 325;
  ufo.dy = 30;
  player.dx = 315;
  spinningUFO();
  abductLoop();
  ctx.drawImage(moscowURL, 0, 0, 650, 350);
  ctx.drawImage(ufoURL, ufo.srcx, ufo.srcy, ufo.srcWidth, ufo.srcHeight, ufo.dx, ufo.dy, ufo.dWidth, ufo.dHeight);
  ctx.drawImage(playerURL, 325, 282, player.srcWidth, player.srcHeight, player.dx, player.dy, player.srcWidth, player.srcHeight);
}

function abductLoop() {
  if (player.dy > 70) {
    player.dy -= player.speed;
  } 
}