var resume = resume || {};

resume.blocks = function (game,x,y) {

    Phaser.Sprite.call(this,game,x,y,'brick');
    this.game = game;
    this.anchor.setTo(0.5);

};

resume.blocks.prototype = Object.create(Phaser.Sprite.prototype);
resume.blocks.prototype.constructor = resume.blocks;