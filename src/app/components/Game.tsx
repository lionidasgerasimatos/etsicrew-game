// components/Game.tsx
"use client";

import { useEffect } from 'react';
import Phaser from 'phaser';

const Game = () => {
  useEffect(() => { // Initialize game instance here
    const config: Phaser.Types.Core.GameConfig = {
      type: Phaser.AUTO,
      width: 1250,
      height: 900,
      parent: 'phaser-container',
      scene: {
        preload: function () {
          this.load.image('logo', '/assets/sprites/sprites.webp'); //im
        },
        create: function () {
          this.add.image(400, 300, 'logo');
        }
      }
    };

    const game = new Phaser.Game(config);

    return () => {
      game.destroy(true);
    };
  }, []);

  return <div id="phaser-container" />;
};

export default Game;
