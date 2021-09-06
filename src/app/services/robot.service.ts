import { Injectable } from '@angular/core';

import { BoardService } from './board.service';

@Injectable({
  providedIn: 'root'
})
export class RobotService {
  
  private currX: number;
  private currY: number;
  private currFacing: string;
  
  private uppperLimit: number;
  private lowerLimit: number;

  private directionMap;

  constructor(private boardService: BoardService) {
    this.uppperLimit = boardService.getUpperLimit();
    this.lowerLimit = boardService.getLowerLimit();
    this.directionMap = boardService.getDirectionMap();
  }

  getPosition(x, y, facing) {
    let coords = new Map([
      ['x', x],
      ['y', y],
      ['facing', facing]
    ]);

    return coords;

  }

  place(coords) {
    
    let x = coords.get('x');
    let y = coords.get('y');
    let facing = coords.get('facing');

    console.log("x=[" + x + "]");
    console.log("y=[" + y + "]");
    console.log("facing=[" + facing + "]");

    // check if coordinates are within the board and facing direction is correct
    if (this.validRange(x) && this.validRange(y) && this.directionMap.get(facing)) {
      this.currX = x;
      this.currY = y;
      this.currFacing = facing;
    }
    
  }

  move() {

    console.log("Before move(): ["+ this.currX + "," + this.currY + "," + this.currFacing + "]");
    
    switch (this.currFacing) {
      case "NORTH":
        if (this.currY < this.uppperLimit)
          this.currY = +this.currY + +1;
        break;
      case "SOUTH":
        if (this.currY > this.lowerLimit)
          this.currY = +this.currY - +1;
        break;
      case "EAST":
        if (this.currX < this.uppperLimit)
          this.currX = +this.currX + +1;
        break;
      case "WEST":
        if (this.currX > this.lowerLimit)
          this.currX = +this.currX - +1;
        break;
      default:
        console.log("Invalid Position");
    }

    console.log("After move(): ["+ this.currX + "," + this.currY + "," + this.currFacing + "]");
  }

  left() {

    console.log("Before left(): ["+ this.currX + "," + this.currY + "," + this.currFacing + "]");
  
    let facing = this.currFacing;
    this.currFacing = this.directionMap.get(facing).LEFT;

    console.log("After left(): ["+ this.currX + "," + this.currY + "," + this.currFacing + "]");
  }

  right() {

    console.log("Before right(): ["+ this.currX + "," + this.currY + "," + this.currFacing + "]");

    let facing = this.currFacing;
    this.currFacing = this.directionMap.get(facing).RIGHT;

    console.log("After right(): ["+ this.currX + "," + this.currY + "," + this.currFacing + "]");
  }

  report() {

    if ( this.currX && this.currY && this.currFacing) {
      let output = this.currX + ","  + this.currY + "," + this.currFacing;
      console.log("output: " + output);

      return output;
    }
    return;

  }

  validRange(x:number){

    console.log("validRange, x=["+ x + "]");

    if (x >= this.lowerLimit && x <= this.uppperLimit)
      return true;

    return false;
  }
}

