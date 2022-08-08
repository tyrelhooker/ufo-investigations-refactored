// Contains constructor for character creation in animation.js
var Sprite = function (url, spriteSheetW, spriteSheetH, spriteSheetRows, spriteSheetCols, srcCurFrame, srcTotFrame, srcx, srcy, dx, dy, speed) {
  this.url = url;
  this.spriteSheetW = spriteSheetW;
  this.spriteSheetH = spriteSheetH;
  this.spriteSheetRows = spriteSheetRows;
  this.spriteSheetCols = spriteSheetCols;
  this.srcCurFrame = srcCurFrame;
  this.srcTotFrame = srcTotFrame;  
  this.srcx = srcx;
  this.srcy = srcy;
  this.srcWidth = this.spriteSheetW / this.spriteSheetCols;
  this.srcHeight = this.spriteSheetH / this.spriteSheetRows;
  this.dx = dx;
  this.dy = dy;
  this.dWidth = this.srcWidth;
  this.dHeight = this.srcHeight;
  this.dirLeft = false;
  this.dirRight = true;
  this.speed = speed;
}; 

//Additional backgrounds included for expansion possibility
var backgrounds = {
  cairoBkgrd: "./public/assets/images/backgrounds/cairo.jpg",
  parisBkgrd: "./public/assets/images/backgrounds/paris.jpg",
  laBkgrd: "./public/assets/images/backgrounds/la.jpg",
  mumbaiBkgrd: "./public/assets/images/backgrounds/mumbai.jpg",
  saopaoloBkgrd: "./public/assets/images/backgrounds/saopaolo.jpg",
  shanghaiBkgrd: "./public/assets/images/backgrounds/shanghai.jpg",
  sydneyBkgrd: "./public/assets/images/backgrounds/sydney.jpg",
  moscowBkgrd: "./public/assets/images/backgrounds/moscow.jpg",
  nycBkgrd: "./public/assets/images/backgrounds/nyc.jpg",
  riverBkgrd: "./public/assets/images/backgrounds/river.jpg",
  boxBkgrd: "./public/assets/images/backgrounds/box.jpg",
  forkBkgrd: "./public/assets/images/backgrounds/fork.jpg",
  homebaseBkgrd: "./public/assets/images/backgrounds/homebase.jpg",
  bridgeBkgrd: "./public/assets/images/backgrounds/bridge.jpg",
  darkForestBkgrd: "./public/assets/images/backgrounds/darkForest.jpg",
  destructForestBkgrd: "./public/assets/images/backgrounds/destructForest.jpg",
  cropCircleBkgrd: "./public/assets/images/backgrounds/cropCircle.jpg"
}

var props = {
  troll: "./public/assets/images/sprites/Troll.png",
  treasureChest: "./public/assets/images/sprites/treasureChest.png",
  supplyCrate: "./public/assets/images/sprites/supplyCrate.png",
  avengersLogo: "./public/assets/images/sprites/avengersLogo.png",
  justiceLeagueLogo: "./public/assets/images/sprites/justiceLeagueLogo.png", 
  ghostbustersLogo: "./public/assets/images/sprites/ghostbustersLogo.png",
  supernaturalLogo: "./public/assets/images/sprites/supernaturalLogo.png",
  assortedWeapons:"./public/assets/images/sprites/weapons.png",
  assortedArmor:"./public/assets/images/sprites/armor.png",
}

// Creation of game characters
var player = new Sprite("./public/assets/images/sprites/hero.png", 640, 470, 5, 8, 0, 6, 0, 94, 0, 260, 3);
var ufo = new Sprite("./public/assets/images/sprites/ufo1/ufov2.png", 696, 210, 5, 12, 0, 12, 0, 0, 0, 10, 7);
var spotBeam = new Sprite("./public/assets/images/sprites/ufo1/ufov2.png", 696, 210, 5, 12, 0, 12,  )
var playerShooting = new Sprite("./public/assets/images/sprites/hero.png", 640, 470, 5, 8, 0, 8, 0, 0, 326, 260, 3);

var playerInjured = new Sprite("./public/assets/images/sprites/hero.png", 640, 470, 5, 8, 1, 7, 240, 282, 326, 260, 3);

// Creates url in correct format for the drawImage();
avengersURL = new Image();
avengersURL.src = props.avengersLogo;
justiceLeagueURL = new Image();
justiceLeagueURL.src = props.justiceLeagueLogo;
ghostbustersURL = new Image();
ghostbustersURL.src = props.ghostbustersLogo;
supernaturalURL = new Image();
supernaturalURL.src = props.supernaturalLogo;

weaponsURL = new Image();
weaponsURL.src = props.assortedWeapons;
armorURL = new Image();
armorURL.src = props.assortedArmor;

playerURL = new Image();
playerURL.src = player.url; 
ufoURL = new Image();
ufoURL.src = ufo.url;
moscowURL = new Image();
moscowURL.src = backgrounds.moscowBkgrd;
playerShootingURL = new Image();
playerShootingURL.src = playerShooting.url;
playerInjuredURL = new Image();
playerInjuredURL.src = playerInjured.url;

riverURL = new Image();
riverURL.src = backgrounds.riverBkgrd;
boxURL = new Image();
boxURL.src = backgrounds.boxBkgrd;
forkURL = new Image();
forkURL.src = backgrounds.forkBkgrd;
homebaseURL = new Image();
homebaseURL.src = backgrounds.homebaseBkgrd;

bridgeURL = new Image();
bridgeURL.src = backgrounds.bridgeBkgrd;
trollURL = new Image();
trollURL.src = props.troll;
treasureChestURL = new Image();
treasureChestURL.src = props.treasureChest;
darkForestURL = new Image();
darkForestURL.src = backgrounds.darkForestBkgrd;
destructForestURL = new Image();
destructForestURL.src = backgrounds.destructForestBkgrd;
supplyCrateURL = new Image();
supplyCrateURL.src = props.supplyCrate;

cropCircleURL = new Image();
cropCircleURL.src = backgrounds.cropCircleBkgrd;