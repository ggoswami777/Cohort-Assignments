interface Game {
  id: string;
  whitePlayerName: string;
  blackPlayerName: string;
  moves: string[];
}

export class GameManager {
  games: Game[] = [];
  private static instance: GameManager;
  private constructor() {
    this.games = [];
  }
  static getInstance() {
    // create a single instance of game manager and return it
    if (GameManager.instance) {
      return GameManager.instance;
    }
    GameManager.instance = new GameManager();
    return GameManager.instance;
  }
  addMove(gameId: string, move: string) {
    console.log(`Adding move ${move} to game ${gameId}`);
    const game = this.games.find((g) => g.id === gameId);
    game?.moves.push(move);
  }
  addGame(gameId: string) {
    const game = {
      id: gameId,
      whitePlayerName: "Player1",
      blackPlayerName: "Player2",
      moves: [],
    };
    this.games.push(game);
  }
}

export const gameManager = GameManager.getInstance();
