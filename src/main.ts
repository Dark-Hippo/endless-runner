import Phaser, { Types } from "phaser";
import { Game } from './scenes/Game';
import { GameOver } from './scenes/GameOver';


//  Find out more information about the Game Config at:
//  https://newdocs.phaser.io/docs/3.70.0/Phaser.Types.Core.GameConfig
const config: Types.Core.GameConfig = {
    width: 600,
    height: 300,
    parent: 'game-container',
    backgroundColor: '#028af8',
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    autoRound: false,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 350, x: 0 },
            debug: true
        }
    },
    scene: [
        Game,
        GameOver
    ]
};

export default new Phaser.Game(config);
