const introTune = new Audio();
introTune.src="audio/intro.m4a";

const mainTune = new Audio();
mainTune.src="audio/main.wav";

const jumpSound = new Audio();
jumpSound.src="audio/Jump13.wav"
jumpSound.volume = 0.4;

const pointSound = new Audio();
pointSound.src="audio/Pickup_Coin16.wav";
pointSound.volume = 0.4;

const deathSound = new Audio();
deathSound.src="audio/Death.wav";

const helloSound = new Audio();
helloSound.src="audio/hello.wav";

const audioCtx = new window.AudioContext();
