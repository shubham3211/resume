var resume=resume||{};

//initiate the Phaser framework
resume.game = new Phaser.Game(window.innerWidth,window.innerHeight,Phaser.AUTO);
resume.game.state.add('preloadState',resume.prelaodState);
resume.game.state.add('homeState',resume.homeState);
resume.game.state.add('gameState',resume.gameState);
resume.game.state.start('preloadState');