states['cult'] = (function() {
  let particles;

  return {
    create: function() {
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

      game.physics.arcade.gravity.y = 20;
      game.input.onDown.add(this.onClick, this);
    },

    onClick: function() {
      particles.forEach(particle => {
        particle.body.velocity.y = (this.input.activePointer.y - particle.y) / 10;
        particle.body.velocity.x = (this.input.activePointer.x - particle.x) / 10;
      });
    }
  };
})();
