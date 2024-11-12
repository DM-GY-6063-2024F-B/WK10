let song;
let mFFT;

function preload() {
  song = loadSound("../assets/epic.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  noFill();
  mFFT = new p5.FFT();
}

function draw() {
  background(220, 10);

  // must call this before getting energy
  mFFT.analyze();

  let energyT = mFFT.getEnergy("treble");
  let diamT = map(energyT, 0, 255, 0, height / 3);
  ellipse(width / 2, height/6, diamT);

  let energyM = mFFT.getEnergy("mid");
  let diamM = map(energyM, 0, 255, 0, height / 3);
  ellipse(width / 2, 3 * height / 6, diamM);

  let energyB = mFFT.getEnergy("bass");
  let diamB = map(energyB, 0, 255, 0, height / 3);
  ellipse(width / 2, 5 * height / 6, diamB);
}

function mouseClicked() {
  if (song.isPlaying()) {
    song.pause();
  } else {
    song.play();
  }
}
