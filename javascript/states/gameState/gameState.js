var resume= resume || {};

resume.gameState = {

  init: function () {

    this.game.physics.startSystem(Phaser.Physics.ARCADE);
    this.groundLevel = 550;
    this.brickWidth = 100;
    this.brickHeight = 100;
    this.gameWidth = 13810;
    this.cursor = this.game.input.keyboard.createCursorKeys();
    this.RUNNING_SPEED = 2000;
    this.game.world.setBounds(0, 0, this.gameWidth, window.innerHeight);
    this.level1 = 1500;
    this.level2 = 5200;
    this.game.physics.arcade.gravity.y = 600;
    this.game.stage.backgroundColor = '#2ECCFA';
    this.noOfBirds = {
      'javascript':'3',
      'nodeJs':'3',
      'c++':'2',
    };
    this.questionWidth = 120;
    this.framework = ['html','css','js','angular','node','jquery']

  },

  create: function () {

    //grass and ground
    this.ground = this.add.tileSprite(0, this.groundLevel + 40, this.gameWidth, 100, 'ground');
    this.game.physics.arcade.enable(this.ground);
    this.ground.body.allowGravity = false;
    this.ground.body.immovable = true;

    this.grass = this.add.tileSprite(0, this.groundLevel - 5, this.gameWidth, 50, 'grass');

    this.applyTree();
    this.brickHeading();

    this.welcomeBanner = this.game.add.sprite(window.innerWidth / 2, 65, 'welocmeBanner');
    this.welcomeBanner.anchor.setTo(0.5);

    this.initSign();
    this.makeSign(this.level1, this.groundLevel - 339);

    this.game.add.sprite(this.level1 + 300, this.groundLevel - 204, 'milestone');
    this.game.add.sprite(this.level1 + 700, this.groundLevel - 388, 'indiaGate');

    this.school = this.game.add.sprite(this.level1 + 1300, this.groundLevel - 388, 'school');
    this.school.scale.setTo(1.7, 1.7);

    this.initCertificate();


    this.game.add.sprite(this.level1 + 2900, this.groundLevel - 473, 'college');

    this.makeSign(this.level2, this.groundLevel - 350);

    this.makeCertificate(this.level1 + 2250, this.groundLevel-1000, 1, 1);
    this.makeCertificate(this.level1 + 2500, this.groundLevel-1000, 1.2, 1.2);

    this.makeTable();

    this.p=1;

    this.makePlayer();

    this.initQuestions();
    this.createBlockSeries(6) ;


    // this.changePlayerPos(6500);

  },

  update: function () {

    this.game.physics.arcade.collide(this.player, this.ground);
    this.game.physics.arcade.collide(this.certificates, this.ground);

    if (this.cursor.left.isDown) {

        this.player.body.velocity.x = -this.RUNNING_SPEED;
        this.player.scale.setTo(-1, 1);
        this.player.play('walking');

    } else if (this.cursor.right.isDown) {

        this.player.body.velocity.x = this.RUNNING_SPEED;
        this.player.scale.setTo(1, 1);
        this.player.play('walking');

    } else {

      // this.player.animations.stop();
      this.player.scale.setTo(1);
      this.player.frame = 0;
      this.player.body.velocity.x = 0;

    }

    if(this.player.x>3100 && this.player.x<4000){

       this.certificates.setAll('body.allowGravity',true);

    }

    if(this.player.x>5300 && this.player.x<10000 && this.p === 1){

       this.makeBirds();
       this.p=0;
    }

  },

  brickHeading: function () {

    this.bricks = this.add.group();

    for (let i = 0; i < 6; i++) {

      if (i <= 3) {
        this.bricks.create(window.innerWidth / 2 - i * this.brickWidth, this.groundLevel - 90, 'brick');
        this.bricks.create(window.innerWidth / 2 + i * this.brickWidth, this.groundLevel - 90, 'brick');
        this.bricks.create(window.innerWidth / 2 + i * this.brickWidth, this.groundLevel - 190, 'brick');
        this.bricks.create(window.innerWidth / 2 - i * this.brickWidth, this.groundLevel - 190, 'brick');
      } else {
        this.bricks.create(window.innerWidth / 2 - i * this.brickWidth, this.groundLevel - 90, 'brick');
        this.bricks.create(window.innerWidth / 2 + i * this.brickWidth, this.groundLevel - 90, 'brick');
      }

    }

    this.bricks.setAll('anchor.x', 0.5);
    this.bricks.setAll('width', this.brickWidth);
    this.bricks.setAll('height', this.brickHeight);

  },

  applyTree: function () {

    this.game.add.sprite(120, 100, 'tree-bright-e');
    this.game.add.sprite(10, 310, 'tree-dark-c');
    this.game.add.sprite(900, 225, 'tree-dark-c');
    this.game.add.sprite(1010, 250, 'tree-bright-d');
    this.game.add.sprite(1150, 450, 'tree-dark-a');
    this.game.add.sprite(11150, 450, 'tree-dark-a');


  },

  makePlayer: function () {

    this.player = this.game.add.sprite(70, this.groundLevel - 90, 'player');
    this.player.anchor.setTo(0.5);
    this.player.animations.add('walking', [0, 1, 2], 15, true);
    this.player.customParams = {};
    this.game.physics.arcade.enable(this.player);
    this.game.camera.follow(this.player)

  },

  render: function () {

    this.game.debug.cameraInfo(this.game.camera, 32, 32);
    this.game.debug.spriteCoords(this.player, 32, 500);

  },

  initSign: function () {

    this.signs = this.add.group();

  },

  makeSign: function (x, y) {

    this.signs.create(x, y, 'sign');
    this.signs.setAll('anchor.x', 0.5);
    this.signs.setAll('anchor.y ', 0.5);

  },

  changePlayerPos: function (x) {

    this.player.x = x;

  },

  initCertificate: function () {

    this.certificates = this.add.group();
    this.certificates.enableBody = true;

  },

  makeCertificate: function (x, y, width, height) {

    let certificate=this.certificates.create(x,y,'result');
    certificate.scale.setTo(width,height);
    certificate.body.allowGravity = false;
    certificate.body.bounce.y = 0.5;

  },

  makeLine: function (x, y, no_of_lines) {

    let graphics = this.game.add.graphics();
    graphics.lineStyle(2, 0xEEA200, 1);

    for (let i = 0; i < no_of_lines; i++) {
        graphics.moveTo(x, y);
        graphics.lineTo(x, y - 450);
        x += 200;
    }

  },

  makeReactangle: function (x, y, makeRibbons) {

    let rectangleWidth = 100;
    let rectangleHeight = 30;
    let graphics = this.game.add.graphics();
    graphics.beginFill(0xFF9300);
    graphics.drawRect(x, y, rectangleWidth, rectangleHeight);
    graphics.endFill();

    if(makeRibbons) {

      let leftRibbon, rightRibbon;
      leftRibbon = this.game.add.sprite(x, y, 'leftRibbon');
      rightRibbon = this.game.add.sprite(x + rectangleWidth, y, 'rightRibbon');
      leftRibbon.height = rectangleHeight;
      rightRibbon.height = rectangleHeight;
      leftRibbon.anchor.setTo(1, 0);

    }

  },

  makeTable: function () {

    //making line distance so that if a small change is needed it would be easy to do so
    this.line_distance = 600;
    this.top = 454;
    this.makeLine(this.level2 + this.line_distance, this.groundLevel - 4, 4);
    //placing the column headings
    this.makeReactangle(this.level2 + this.line_distance, this.groundLevel - this.top);
    this.makeReactangle(this.level2 + this.line_distance + 200, this.groundLevel - this.top);
    this.makeReactangle(this.level2 + this.line_distance + 400, this.groundLevel - this.top);
    this.makeReactangle(this.level2 + this.line_distance + 600, this.groundLevel - this.top);
    //placing row headings
    this.makeReactangle(this.level2 + this.line_distance - 150, this.groundLevel - (this.top - 74) / 3, true);
    this.makeReactangle(this.level2 + this.line_distance - 150, this.groundLevel - (2 * (this.top - 74)) / 3, true);
    this.makeReactangle(this.level2 + this.line_distance - 150, this.groundLevel - (this.top - 74), true);

    this.initBirds();

  },

  initBirds:function () {

    this.birds = this.add.group();

  },

  makeBirds:function () {

    let timer = 1;
    let no_of_elements = Object.keys(this.noOfBirds).length;
    for(let index in this.noOfBirds ) {

      for(let j=1;j<=this.noOfBirds[index];j++){
        let bird=this.birds.create(this.level2 + this.line_distance + 1000*j,this.groundLevel-((this.top-74)*(no_of_elements))/3,'bird');
        bird.scale.setTo(.6,.6);
        let birdMove = this.game.add.tween(bird).to({x:this.level2 + this.line_distance +200*(j-1)},100 *timer++)
        birdMove.start();
      }
      no_of_elements--;
    }

  },

  initQuestions:function () {

    this.questions = this.add.group();
    this.blocks = this.add.group();
    this.explosions = this.add.group();
    this.languageCollection = this.add.group();

  },

  createBlockSeries:function (no_of_questions) {

    for(let i=1;i<=no_of_questions;i++){

      let blast = new resume.explosion(this.game,this.level2+1500+2*i*this.questionWidth,this.groundLevel-275,this.player);
      let question = new resume.question(this.game,this.level2+1500+2*i*this.questionWidth,this.groundLevel-275,this.player);
      let language = new resume.language(this.game,this.level2+1500+2*i*this.questionWidth,this.groundLevel-275,this.framework[i-1],this.player);
      let tree = this.game.add.sprite(this.level2+1500+2*i*this.questionWidth,this.groundLevel-95,'tree-bright-b');
      tree.anchor.setTo(0.5);
      question.width = this.questionWidth;
      this.questions.add(question);
      this.explosions.add(blast);
      this.languageCollection.add(language);
      this.game.world.swap(tree,this.player)

    }

    this.game.world.swap(this.explosions,this.questions);

    for(let i=1;i<=no_of_questions+1;i++){

      let block = new resume.blocks(this.game,this.level2+1380+2*i*this.questionWidth,this.groundLevel-275);
      block.width = this.questionWidth;
      this.blocks.add(block);

    }

    this.game.world.swap(this.explosions,this.blocks);

  }

};