import { games } from "./store.js";
import { startLogger } from "./logger.js";

startLogger();

setInterval(() => {
    games.push({
        id: Math.random().toString(36).substring(2, 15),
        whitePlayerName: "Player1",
        blackPlayerName: "Player2",
        moves: ["e4", "e5", "Nf3", "Nc6"],
    })
}, 1000);