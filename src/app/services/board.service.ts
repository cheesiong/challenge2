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
}
