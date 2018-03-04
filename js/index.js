let game;
const states = {};

window.onload = (function() {
  game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create });

  function preload() {
    game.load.image('circle', 'assets/circle.png');
    game.state.add('ParticlesAwayState', states['particlesAway']);
  }

  function create() {
    game.physics.startSystem(Phaser.Physics.ARCADE);
    game.state.start('ParticlesAwayState');
  }
})();
