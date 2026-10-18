import {gameManager } from "./store.js";
import { startLogger } from "./logger.js";


startLogger();

setInterval(() => {
    gameManager.addGame(`game-${Date.now()}`);
}, 5000);