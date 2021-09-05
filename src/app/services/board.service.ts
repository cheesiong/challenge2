import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  private uppperLimit= 4;
  private lowerLimit = 0;

  private directionMap = new Map ([
    ['NORTH', {
        'left': 'WEST',
        'right': 'EAST'
    }],
    ['SOUTH', {
        'left': 'EAST',
        'right': 'WEST'
    }],
    ['EAST', {
        'left': 'NORTH',
        'right': 'SOUTH'
    }],
    ['WEST', {
        'left': 'SOUTH',
        'right': 'NORTH'
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
