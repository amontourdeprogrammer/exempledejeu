var socket = io();

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
    socket.on("placed", onPlaced);
  }

  function placeOne(x, y, frame) {
    var sagittarius = game.add.sprite(
      x,
      y,
      'tiles',
      frame);
    sagittarius.anchor.setTo(0.5, 0.5);
    sagittariuses.push(sagittarius);
  }

  function onTap(pointer, doubleTap) {
    var frame = game.rnd.integerInRange(70, 90);

    placeOne(pointer.x, pointer.y, frame);

    socket.emit("place",
                {
                  x: pointer.x,
                  y: pointer.y,
                  frame: frame
                });
  }

  function onPlaced(info) {
    placeOne(info.x, info.y, info.frame);
  }
};
