var resume = resume || {};

resume.question=function (game,x,y,player) {
  
  Phaser.Sprite.call(this,game,x,y,'question_block');
  this.game = game;
  this.player = player;
  this.anchor.setTo(0.5);

    
};

resume.question.prototype = Object.create(Phaser.Sprite.prototype);
resume.question.prototype.constructor = resume.question;

resume.question.prototype.update = function () {

    if(this.player.x > this.x && this.player.x<this.x+120){

        this.alpha = 0;

    }

};