var resume=resume||{};

//initiate the Phaser framework
resume.game = new Phaser.Game('100%','100%',Phaser.AUTO);
resume.game.state.add('preloadState',resume.preloadState);
resume.game.state.add('gameState',resume.gameState);
resume.game.state.start('prelaodState');