let game;
const states = {};

window.onload = (function() {
  game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create });

  function preload() {
    game.load.image('circle', 'assets/circle.png');
    game.state.add('particlesAway', states['particlesAway']);
    game.state.add('particlesTogether', states['particlesTogether']);
  }

  function create() {
    game.physics.startSystem(Phaser.Physics.ARCADE);
    game.state.start('particlesTogether');

    game.input.keyboard.addCallbacks(this, null, null, switchState);
  }

  function switchState() {
    const statesList = Object.keys(states);
    const currentStateIndex = statesList.indexOf(game.state.current);
    const nextStateIndex = currentStateIndex < statesList.length - 1 ? currentStateIndex + 1 : 0;
    game.state.start(statesList[nextStateIndex]);
    console.log(nextStateIndex);
  }

  function update() {
  }
})();
