var resume = resume || {};

resume.language = function (game,x,y,key,player) {

    Phaser.Sprite.call(this,game,x,y,key);
    this.game = game;
    this.anchor.setTo(0.5);
    this.width = 150;
    this.height = 175;
    if(key === 'jquery'){

      this.height = 100;
      this.width = 210;

    }

    if(key === 'node'){

      this.width = 200;

    }

    this.alpha = 0;
    this.moveUpper = this.game.add.tween(this).to({y:100,alpha:1},500);
    this.player = player;

};

resume.language.prototype = Object.create(Phaser.Sprite.prototype);
resume.language.prototype.constructor = resume.language;

resume.language.prototype.update = function () {

  if(this.player.x>this.x && this.player.x<this.x+120){

    this.moveUpper.start();

  }

};