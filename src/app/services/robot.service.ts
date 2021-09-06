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
    
    this.currX = coords.get('x');
    this.currY = coords.get('y');
    this.currFacing = coords.get('facing');

  }

  move() {

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
  }

  left() {

    let facing = this.currFacing;
    this.currFacing = this.directionMap.get(facing).LEFT;
  }

  right() {

    let facing = this.currFacing;
    this.currFacing = this.directionMap.get(facing).RIGHT;

  }

  report() {

    let output = this.currX + ","  + this.currY + "," + this.currFacing;
    console.log("output: " + output);
    return output;

  }

}

