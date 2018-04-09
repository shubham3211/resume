var resume = resume || {};

resume.explosion = function (game,x,y,player) {

    Phaser.Sprite.call(this,game,x,y,'explode');
    this.game = game;
    this.player = player;
    this.anchor.setTo(0.5);
    this.blasting = this.animations.add('blast',[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],30,false);
    this.blasting.onComplete.add(function () {

        this.alpha = 0;

    },this)
    this.width = 218;
    this.height = 218;

};

resume.explosion.prototype = Object.create(Phaser.Sprite.prototype);
resume.explosion.prototype.constructor = resume.explosion;

resume.explosion.prototype.update = function () {

  if(this.player.x > this.x && this.player.x<this.x+50){

    this.blasting.play('blast');

  }

};