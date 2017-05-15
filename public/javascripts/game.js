window.onload = function() {

  var game = new Phaser.Game(800, 600, Phaser.AUTO, '',
                             { preload: preload, create: create });
  var sagittariuses = [];

  function preload () {

    game.load.image('logo', 'images/phaser.png');
    game.load.spritesheet('tiles', 'images/tiles.png', 32, 32);

  }

  function create () {
    game.input.onTap.add(onTap);
  }

  function onTap(pointer, doubleTap) {
    var sagittarius = game.add.sprite(
      pointer.x,
      pointer.y,
      'tiles',
      game.rnd.integerInRange(70, 90));
    sagittarius.anchor.setTo(0.5, 0.5);

    sagittariuses.push(sagittarius);
  }
};
