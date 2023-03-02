// Christian-Thomas Douglas De Guzman Johnson
// CSC 2463 Assignment 2.1
// Build a Sampler
const sounds = new Tone.Players({
  'bark': 'sounds/sounds_bark.mp3',
  'chirp': 'sounds/sounds_chirp.mp3',
  'guitar': 'sounds/sounds_guitar.mp3',
  'meow': 'sounds/sounds_meow.mp3',
  'name': 'sounds/sounds_name.mp3',
})

let pbRate = 1;
let button1, button2, button3, button4, button5;
let slider;
const vol = new Tone.Volume().toDestination();

function setup() {
  createCanvas(360, 70);

  sounds.connect(vol);
  vol.toDestination();

  button1 = createButton('bark');
  button1.position(0, 20);
  button1.mousePressed(()=>playSound('bark'));

  button2 = createButton('chirp');
  button2.position(75, 20);
  button2.mousePressed(()=>playSound('chirp'));

  button3 = createButton('guitar');
  button3.position(150, 20);
  button3.mousePressed(()=>playSound('guitar'));

  button4 = createButton('meow');
  button4.position(227, 20);
  button4.mousePressed(()=>playSound('meow'));
  
  button5 = createButton('name');
  button5.position(308, 20);
  button5.mousePressed(()=>playSound('name'));
 
  slider = createSlider(0, 20, 2, 0);
  slider.mouseReleased( () => { 
    vol.volume.value = slider.value();
  })

}

function draw() {
  background('#c4a5e8');
  textSize(20);
  text('press buttons for sound', 0, 15);
  text('move slider to change volume', 0, 60);
}

function playSound(soundName) {
  if (soundName === 'bark') 
  {
    sounds.player('bark').start();
  }
  else if (soundName === 'chirp') 
  {
    sounds.player('chirp').start();
  }
  else if (soundName === 'guitar') 
  {
    sounds.player('guitar').start();
  }
  else if (soundName === 'meow') 
  {
    sounds.player('meow').start();
  }
  else if (soundName === 'name') 
  {
    sounds.player('name').start(); 
  }
}

