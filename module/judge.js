
/**
  * 判定するもの
  * - 勝ち負け GameJudge
  * - 置けるます
  * - 
  **/
class GameJudge {
  constructor(){}
  
  judge(cells){
    let black_count = 0;
    let white_count = 0;
    let none_count = 0;
    for(var cell_y = 0; cell_y < 8; cell_y++){
      for(var cell_x = 0; cell_x < 8; cell_x++){
        switch(cells[cell_y][cell_x]){
          case STONE.NONE:
            none_count++;
            break;
          case STONE.BLACK:
            black_count++;
            break;
          case STONE.WHITE:
            white_count++;
            break;
        }
      }
    }
    if(black_count == 0){
      return STONE.WHITE;
    }
    if(white_count == 0){
      return STONE.BLACK;
    }
    if(none_count == 0){
      if(white_count < black_count){
        return STONE.BLACK;
      }
      if(black_count < white_count){
        return STONE.WHITE;
      }
    }
    return STONE.NONE;
  }
}


class PutCellJudge {
  constructor(){
  }
}