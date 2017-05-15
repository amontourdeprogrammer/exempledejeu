window.onload = function() {

  var game = new Phaser.Game(800, 600, Phaser.AUTO, '',
                             { preload: preload, create: create });
  var sagittarius;

  function preload () {

    game.load.image('logo', 'images/phaser.png');
    game.load.spritesheet('tiles', 'images/tiles.png', 32, 32);

  }

  function create () {
    sagittarius = game.add.sprite(game.world.centerX,
                                  game.world.centerY,
                                  'tiles',
                                  80);
    sagittarius.anchor.setTo(0.5, 0.5);

    game.input.onTap.add(onTap);
  }

  function onTap(pointer, doubleTap) {
    sagittarius.x = pointer.x;
    sagittarius.y = pointer.y;

  }
};
