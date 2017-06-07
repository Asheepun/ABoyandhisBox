const introTune = new Audio();
introTune.src="/game/audio/intro.m4a";

const mainTune = new Audio();
mainTune.src="/game/audio/main.wav";

const jumpSound = new Audio();
jumpSound.src="/game/audio/Jump13.wav"
jumpSound.volume = 0.4;

const pointSound = new Audio();
pointSound.src="/game/audio/Pickup_Coin16.wav";
pointSound.volume = 0.4;

const deathSound = new Audio();
deathSound.src="/game/audio/Death.wav";

const helloSound = new Audio();
helloSound.src="/game/audio/hello.wav";

const audioCtx = new window.AudioContext();
