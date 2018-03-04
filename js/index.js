let game;

window.onload = function() {
  game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create });
  let particles;

  function preload() {
    this.game.load.image('circle', 'assets/circle.png');
  }

  function create() {
    game.physics.startSystem(Phaser.Physics.ARCADE);

    particles = [];
    for(let i = 0; i < 10; i++) {
      particles.push(game.add.sprite(Math.random() * game.width, Math.random() * game.height, 'circle'));
    }

    particles.forEach(particle => {
      game.physics.enable(particle, Phaser.Physics.ARCADE)
      particle.body.collideWorldBounds = true;
      particle.body.bounce.y = Math.random();
      particle.body.bounce.set(Math.random());
    });

    game.physics.arcade.gravity.y = 0;
    game.input.onDown.add(onClick, this);
  }


  function onClick() {
    console.log('X:' + this.input.activePointer.x);
    console.log('Y:' + this.input.activePointer.y); 
    particles.forEach(particle => {
      console.log(particle.y, particle.x);
      particle.body.velocity.y = 10 * Math.random() * (particle.y - this.input.activePointer.y);
      particle.body.velocity.x = 10 * Math.random() * (particle.x - this.input.activePointer.x);
    });
  }
};
