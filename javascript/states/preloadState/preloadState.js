var resume=resume || {};

resume.prelaodState={

  init:function () {

    this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    this.scale.pageAlignVertically = true;
    this.scale.pageAlignHorizontally = true;

  },

  preload:function () {

    this.load.image('grass','assets/images/grass.png');
    this.load.image('ground','assets/images/ground.png');
    this.load.image('brick','assets/images/brick.png');
    this.load.image('tree-bright-a','assets/images/tree/tree-bright-a.png');
    this.load.image('tree-bright-b','assets/images/tree/tree-bright-b.png');
    this.load.image('tree-bright-d','assets/images/tree/tree-bright-d.png');
    this.load.image('tree-bright-e','assets/images/tree/tree-bright-e.png');
    this.load.image('tree-dark-a','assets/images/tree/tree-dark-a.png');
    this.load.image('tree-dark-b','assets/images/tree/tree-dark-b.png');
    this.load.image('tree-dark-c','assets/images/tree/tree-dark-c.png');
    this.load.image('tree-dark-d','assets/images/tree/tree-dark-d.png');
    this.load.image('welocmeBanner','assets/images/welcome-banner.png');
    this.load.spritesheet('player','assets/images/player.png',200,220,3);
    this.load.spritesheet('explode','assets/images/explode.png',128,128,16);
    // this.load.image('frontButton','assets/images/front.png');
    // this.load.image('backButton','assets/images/back.png');
    this.load.image('sign','assets/images/sign.png');
    this.load.image('indiaGate','assets/images/india-gate.png');
    this.load.image('milestone','assets/images/milestone.png');
    this.load.image('school','assets/images/school.png');
    this.load.image('result','assets/images/result.png');
    this.load.image('college','assets/images/college.png');
    this.load.image('rightRibbon','assets/images/plant-ribbon-right.png');
    this.load.image('leftRibbon','assets/images/plant-ribbon-left.png');
    this.load.image('bird','assets/images/bird.png');
    this.load.image('question_block','assets/images/question_block.png');

  },

  create:function () {

    this.state.start('gameState');

  }

};