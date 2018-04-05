var resume= resume || {};

resume.gameState = {

  init:function () {

   this.game.physics.startSystem(Phaser.Physics.ARCADE);
   this.groundLevel = 550;
   this.brickWidth = 100;
   this.brickHeight = 100;
   this.gameWidth=13810;
   this.cursor=this.game.input.keyboard.createCursorKeys();
   this.RUNNING_SPEED = 2000;
   this.game.world.setBounds(0,0,this.gameWidth,window.innerHeight);
   this.level1 = 1500;
   this.game.physics.arcade.gravity.y=600;
   this.game.stage.backgroundColor = '#2ECCFA';

  },

  create : function () {

    //grass and ground
    this.ground=this.add.tileSprite(0,this.groundLevel+40,this.gameWidth,100,'ground');
    this.game.physics.arcade.enable(this.ground);
    this.ground.body.allowGravity=false;
    this.ground.body.immovable=true;

    this.grass=this.add.tileSprite(0,this.groundLevel-5,this.gameWidth,50,'grass');

    this.applyTree();
    this.brickHeading();

    this.welcomeBanner=this.game.add.sprite(window.innerWidth/2,65,'welocmeBanner');
    this.welcomeBanner.anchor.setTo(0.5);

    this.initSign();
    this.makeSign(this.level1,this.groundLevel-339);

    this.game.add.sprite(this.level1+300,this.groundLevel-204,'milestone');
    this.game.add.sprite(this.level1+700,this.groundLevel-388,'indiaGate');

    this.school = this.game.add.sprite(this.level1+1300,this.groundLevel-388,'school');
    this.school.scale.setTo(1.7,1.7);

    this.initCertificate();
    this.makeCertificate(this.level1+2250,this.groundLevel-500,1,1);
    this.makeCertificate(this.level1+2500,this.groundLevel-500,1.2,1.2);

    this.game.add.sprite(this.level1+2900,this.groundLevel-473,'college');

    this.makePlayer();
    this.changePlayerPos(4500);

  },

  update:function () {

    this.game.physics.arcade.collide(this.player,this.ground);
    this.game.physics.arcade.collide(this.certificates,this.ground);

    if(this.cursor.left.isDown){

      this.player.body.velocity.x = -this.RUNNING_SPEED;
      this.player.scale.setTo(-1,1);
      this.player.play('walking');

    } else if(this.cursor.right.isDown){

      this.player.body.velocity.x = this.RUNNING_SPEED;
      this.player.scale.setTo(1,1);
      this.player.play('walking');  

    } else {

      this.player.animations.stop();
      this.player.scale.setTo(1);
      this.player.frame = 0;
      this.player.body.velocity.x=0;

    }

  },

  brickHeading : function () {

    this.bricks=this.add.group();

    for(let i=0;i<6;i++){

      if(i<=3){
        this.bricks.create(window.innerWidth/2-i*this.brickWidth,this.groundLevel-90,'brick');
        this.bricks.create(window.innerWidth/2+i*this.brickWidth,this.groundLevel-90,'brick');
        this.bricks.create(window.innerWidth/2+i*this.brickWidth,this.groundLevel-190,'brick');
        this.bricks.create(window.innerWidth/2-i*this.brickWidth,this.groundLevel-190,'brick');
      }else{
        this.bricks.create(window.innerWidth/2-i*this.brickWidth,this.groundLevel-90,'brick');
        this.bricks.create(window.innerWidth/2+i*this.brickWidth,this.groundLevel-90,'brick');
      }

    }

    this.bricks.setAll('anchor.x',0.5);
    this.bricks.setAll('width',this.brickWidth);
    this.bricks.setAll('height',this.brickHeight);

  },

  applyTree:function () {
    
    this.game.add.sprite(120,100,'tree-bright-e');
    this.game.add.sprite(10,310,'tree-dark-c');
    this.game.add.sprite(900,225,'tree-dark-c');
    this.game.add.sprite(1010,250,'tree-bright-d');
    this.game.add.sprite(1150,450,'tree-dark-a');
    this.game.add.sprite(11150,450,'tree-dark-a');


  },
    
  makePlayer:function () {

    this.player = this.game.add.sprite(70,this.groundLevel-90,'player');
    this.player.anchor.setTo(0.5);
    this.player.animations.add('walking',[0,1,2],15,true);
    this.player.customParams = {};
    this.game.physics.arcade.enable(this.player);
    this.game.camera.follow(this.player)

  },

  render:function () {

    this.game.debug.cameraInfo(this.game.camera,32,32);
    this.game.debug.spriteCoords(this.player, 32, 500);

  },
    
  initSign:function () {

    this.signs = this.add.group();

  },

  makeSign:function (x,y) {

    this.signs.create(x,y,'sign');
    this.signs.setAll('anchor.x',0.5);
    this.signs.setAll('anchor.y ',0.5);

  },

  changePlayerPos:function (x) {

    this.player.x = x;

  },

  initCertificate:function () {

    this.certificates = this.add.group();
    this.certificates.enableBody = true;

  },

  makeCertificate:function (x,y,width,height) {

    let certificate=this.certificates.create(x,y,'result');
    certificate.body.bounce.y=0.5;
    certificate.scale.setTo(width,height);

  }
};