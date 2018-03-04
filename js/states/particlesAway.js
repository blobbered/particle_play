states['particlesAway'] = (function() {
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

      game.physics.arcade.gravity.y = 0;
      game.input.onDown.add(this.onClick, this);
    },

    onClick: function() {
      particles.forEach(particle => {
        particle.body.velocity.y = 10 * Math.random() * (particle.y - this.input.activePointer.y);
        particle.body.velocity.x = 10 * Math.random() * (particle.x - this.input.activePointer.x);
      });
    }
  };
})();
