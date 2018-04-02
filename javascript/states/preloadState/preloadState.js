var resume=resume || {};

resume.prelaodState={

  init:function () {

    this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    this.scale.pageAlignVertically = true;
    this.scale.pageAlignHorizontally = true;
    this.grassHeight = '10px';
    this.groundheight = '5px';

  },

  preload:function () {

    this.load.image('grass','../../assets/images/grass.png');
    this.load.image('ground','../../assets/images/ground.png');

  },

  create:function () {

    this.grass = this.add.sprite(this.grassHeight,'grass');
    this.ground = this.add.sprite(this.groundheight,'ground');

  }

};