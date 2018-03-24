states['particlesTogether'] = (function() {
  let particles;

  return {
    create: function() {
      particles = [];
      for(let i = 0; i < 10; i++) {
        particles.push(game.add.sprite(Math.random() * game.width, Math.random() * game.height, 'circle'));
        particles[i].tint = 16724639;
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
        particle.x = particle.body.x + ((this.input.activePointer.x- particle.x) / 10);
        particle.y = particle.body.y + ((this.input.activePointer.y - particle.y) / 10);
      });
    }
  };
})();
