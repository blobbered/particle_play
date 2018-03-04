states['main'] = (function() {
  const state = {
    create: function() {
      particle = new Phaser.Circle(50, 50, 10); //todo: how to add to the game?
      game.physics.startSystem(Phaser.Physics.ARCADE);
    }
  };

  return { state };
})();
