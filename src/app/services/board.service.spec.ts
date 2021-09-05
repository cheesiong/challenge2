import { TestBed } from '@angular/core/testing';

import { BoardService } from './board.service';

describe('BoardService', () => {
  let service: BoardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BoardService);
  });

  it('BoardService created successfully', () => {
    expect(service).toBeTruthy();
  });

  it('Facing NORTH, turn left becomes facing WEST', () => {
    let directionMap = service.getDirectionMap();
    let facing = directionMap.get("NORTH").left;

    expect(facing).toEqual("WEST");
  });

  it('Facing NORTH, turn right becomes facing EAST', () => {
    let directionMap = service.getDirectionMap();
    let facing = directionMap.get("NORTH").right;

    expect(facing).toEqual("EAST");
  });

  it('Facing SOUTH, turn left becomes facing EAST', () => {
    let directionMap = service.getDirectionMap();
    let facing = directionMap.get("SOUTH").left;

    expect(facing).toEqual("EAST");
  });

  it('Facing SOUTH, turn right becomes facing WEST', () => {
    let directionMap = service.getDirectionMap();
    let facing = directionMap.get("SOUTH").right;

    expect(facing).toEqual("WEST");
  });

  it('Facing EAST, turn left becomes facing NORTH', () => {
    let directionMap = service.getDirectionMap();
    let facing = directionMap.get("EAST").left;

    expect(facing).toEqual("NORTH");
  });

  it('Facing EAST, turn right becomes facing SOUTH', () => {
    let directionMap = service.getDirectionMap();
    let facing = directionMap.get("EAST").right;

    expect(facing).toEqual("SOUTH");
  });

  it('Facing WEST, turn left becomes facing SOUTH', () => {
    let directionMap = service.getDirectionMap();
    let facing = directionMap.get("WEST").left;

    expect(facing).toEqual("SOUTH");
  });

  it('Facing WEST, turn right becomes facing NORTH', () => {
    let directionMap = service.getDirectionMap();
    let facing = directionMap.get("WEST").right;

    expect(facing).toEqual("NORTH");
  });

});
