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

  },

  create:function () {

    this.state.start('gameState');

  }

};