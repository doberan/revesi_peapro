/*
  多重配列
  コマ（Stone.js）
*/
class Board{
  constructor(){
    this.cells = new Array(8);
    for(let y = 0; y < 8; y++){
      this.cells[y] = new Array(8).fill(STONE.NONE);
    }
    this.board = document.getElementById("board");
  }
  
  /**
   * 描画処理
   */
   draw(){
    this.board.removeChild;
    for(var cell_y = 0; cell_y < 8; cell_y++){
      let tr = document.createElement("tr", "");
      for(var cell_x = 0; cell_x < 8; cell_x++){
        let cell = document.createElement("td", "");
        switch(this.cells[cell_y][cell_x]){
          case STONE.NONE:
            cell.innerHTML = " ";
            break;
          case STONE.BLACK:
            cell.innerHTML = "●";
            break;
          case STONE.WHITE:
            cell.innerHTML = "○";
            break;
        }
        cell.setAttribute("class", `${cell_y}_${cell_x}`);
        tr.appendChild(cell);
      }
      this.board.appendChild(tr);
    }
  }
  
  /**
   * コマを置く
   * stone_color = コマ色
   * cell_x = セルｘ座標
   * cell_y =　セルｙ座標
   */
  set_cell(stone_color, cell_x, cell_y) {
    this.cells[cell_x][cell_y] = stone_color;
  }
  
  /** 
   * ボード情報を返却する
   */
  get_board() {
    return this.cells;
  }
}