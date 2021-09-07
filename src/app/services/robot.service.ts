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

  setPosition(x, y, facing) {
    this.currX = x;
    this.currY = y;
    this.currFacing = facing;
  }

  resetPosition() {
    this.currX = null;
    this.currY = null;
    this.currFacing = null;
  }

  place(coords) {
    
    this.resetPosition();

    if (this.boardService.validCoords(coords)) {
      this.currX = coords.get('x');
      this.currY = coords.get('y');
      this.currFacing = coords.get('facing');
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

    if (this.boardService.validFacing(facing))
      this.currFacing = this.directionMap.get(facing).LEFT;

    console.log("After left(): ["+ this.currX + "," + this.currY + "," + this.currFacing + "]");
  }

  right() {

    console.log("Before right(): ["+ this.currX + "," + this.currY + "," + this.currFacing + "]");

    let facing = this.currFacing;

    if (this.boardService.validFacing(facing))
      this.currFacing = this.directionMap.get(facing).RIGHT;

    console.log("After right(): ["+ this.currX + "," + this.currY + "," + this.currFacing + "]");
  }

  report() {

    console.log("Before: ["+ this.currX + "," + this.currY + "," + this.currFacing + "]");

    if (this.boardService.validRange(this.currX) && 
        this.boardService.validRange(this.currY) && 
        this.boardService.validFacing(this.currFacing)) {
      let output = this.currX + ","  + this.currY + "," + this.currFacing;
      console.log("output: " + output);
      return output;
    }
    console.log("After: ["+ this.currX + "," + this.currY + "," + this.currFacing + "]");
  }

  
}

