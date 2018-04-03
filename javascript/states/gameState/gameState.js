var resume= resume || {};

resume.gameState = {

  init:function () {

   this.level=550;
   this.brickWidth=100;
   this.brickHeight=100;

  },

  create : function () {

    this.game.stage.backgroundColor = '#2ECCFA';

    //grass and ground
    this.grass=this.add.tileSprite(0,this.level+40,this.game.width,100,'ground');
    this.grass=this.add.tileSprite(0,this.level-5,this.game.width,50,'grass');

    this.applyTree();
    this.brickHeading();

  },

  brickHeading : function () {

    this.bricks=this.add.group();

    for(let i=0;i<6;i++){

      if(i<=3){
        this.bricks.create(this.game.world.centerX-i*this.brickWidth,this.level-90,'brick');
        this.bricks.create(this.game.world.centerX+i*this.brickWidth,this.level-90,'brick');
        this.bricks.create(this.game.world.centerX+i*this.brickWidth,this.level-190,'brick');
        this.bricks.create(this.game.world.centerX-i*this.brickWidth,this.level-190,'brick');
      }else{
        this.bricks.create(this.game.world.centerX-i*this.brickWidth,this.level-90,'brick');
        this.bricks.create(this.game.world.centerX+i*this.brickWidth,this.level-90,'brick');
      }

    }

    this.bricks.setAll('anchor.x',0.5);
    this.bricks.setAll('width',this.brickWidth);
    this.bricks.setAll('height',this.brickHeight);

  },

  applyTree:function () {
    
    this.game.add.sprite(120,100,'tree-bright-e')
    this.game.add.sprite(10,310,'tree-dark-c')
    this.game.add.sprite(900,225,'tree-dark-c')
    this.game.add.sprite(1010,250,'tree-bright-d')
    this.game.add.sprite(1150,450,'tree-dark-a')


  }
};