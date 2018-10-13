var board = new Board();
var game_judge = new GameJudge();
board.draw();

console.log(game_judge.judge(board.get_board()));
