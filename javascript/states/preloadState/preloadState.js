var resume=resume || {};

resume.prelaodState={

  init:function () {

    this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    this.scale.pageAlignVertically = true;
    this.scale.pageAlignHorizontally = true;

  },

  preload:function () {

    this.load.image('grass','assets/images/grass.png')
    this.load.image('ground','assets/images/ground.png')
    this.load.image('brick','assets/images/brick.png')

  },

  create:function () {

    this.state.start('gameState');

  }

};