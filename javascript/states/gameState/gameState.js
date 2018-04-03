var resume= resume || {};

resume.gameState = {

  init:function () {

   this.level=550;
   this.brickWidth=90;
   this.brickHeight=90;

  },

  create : function () {

    this.game.stage.backgroundColor = '#2ECCFA';

    //grass and ground
    this.grass=this.add.tileSprite(0,this.level+40,this.game.width,100,'ground');
    this.grass=this.add.tileSprite(0,this.level-5,this.game.width,50,'grass');

    this.brickHeading();
  },

  brickHeading : function () {

      this.bricks=this.add.group();
    for(let i=0;i<6;i++){

     var brick;
        brick = this.game.add.sprite(this.game,this.game.world.centerX+this.brickWidth*i,this.level-80);
        this.bricks.add(brick);
        brick = this.game.add.sprite(this.game,this.game.world.centerX-this.brickWidth*i,this.level-80);
        this.bricks.add(brick);
    }


    for(let i=0;i<4;i++){



    }

  }
};