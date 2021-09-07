import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  private uppperLimit= 4;
  private lowerLimit = 0;

  private directionMap = new Map ([
    ["NORTH", {
        "LEFT": "WEST",
        "RIGHT": "EAST"
    }],
    ["SOUTH", {
        "LEFT": "EAST",
        "RIGHT": "WEST"
    }],
    ["EAST", {
        "LEFT": "NORTH",
        "RIGHT": "SOUTH"
    }],
    ["WEST", {
        "LEFT": "SOUTH",
        "RIGHT": "NORTH"
    }]
  ]);

  constructor() { }

  getUpperLimit() {
    return this.uppperLimit;
  }

  getLowerLimit() {
    return this.lowerLimit;
  }

  getDirectionMap() {
    return this.directionMap;
  }

  validRange(num:number){

    if (num >= this.lowerLimit && num <= this.uppperLimit)
      return true;

    return false;
  }

  validFacing(facing) {

    if (this.directionMap.has(facing))
      return true;
    
    return false;
  }

  validCoords(coords) {
    let x = coords.get('x');
    let y = coords.get('y');
    let facing = coords.get('facing');

    // check if coordinates are within the board and facing direction is correct
    if (this.validRange(x) && this.validRange(y) && this.directionMap.get(facing)) 
      return true;
    
    return false;
  }
}
