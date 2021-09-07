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

  it('Test Facing: Facing NORTH, turn left becomes facing WEST', () => {
    let directionMap = service.getDirectionMap();
    let facing = directionMap.get("NORTH").LEFT;

    expect(facing).toEqual("WEST");
  });

  it('Test Facing: Facing NORTH, turn right becomes facing EAST', () => {
    let directionMap = service.getDirectionMap();
    let facing = directionMap.get("NORTH").RIGHT;

    expect(facing).toEqual("EAST");
  });

  it('Test Facing: Facing SOUTH, turn left becomes facing EAST', () => {
    let directionMap = service.getDirectionMap();
    let facing = directionMap.get("SOUTH").LEFT;

    expect(facing).toEqual("EAST");
  });

  it('Test Facing: Facing SOUTH, turn right becomes facing WEST', () => {
    let directionMap = service.getDirectionMap();
    let facing = directionMap.get("SOUTH").RIGHT;

    expect(facing).toEqual("WEST");
  });

  it('Test Facing: Facing EAST, turn left becomes facing NORTH', () => {
    let directionMap = service.getDirectionMap();
    let facing = directionMap.get("EAST").LEFT;

    expect(facing).toEqual("NORTH");
  });

  it('Test Facing: Facing EAST, turn right becomes facing SOUTH', () => {
    let directionMap = service.getDirectionMap();
    let facing = directionMap.get("EAST").RIGHT;

    expect(facing).toEqual("SOUTH");
  });

  it('Test Facing: Facing WEST, turn left becomes facing SOUTH', () => {
    let directionMap = service.getDirectionMap();
    let facing = directionMap.get("WEST").LEFT;

    expect(facing).toEqual("SOUTH");
  });

  it('Test Facing: Facing WEST, turn right becomes facing NORTH', () => {
    let directionMap = service.getDirectionMap();
    let facing = directionMap.get("WEST").RIGHT;

    expect(facing).toEqual("NORTH");
  });

  it('Test Facing: SOUTH is a valid direction', () => {

    expect(service.validFacing("SOUTH")).toBe(true);

  });
  
  it('Test Facing: NORTH is a valid direction', () => {

    expect(service.validFacing("NORTH")).toBe(true);

  })

  it('Test Facing: EAST is a valid direction', () => {

    expect(service.validFacing("EAST")).toBe(true);

  })

  it('Test Facing: WEST is a valid direction', () => {

    expect(service.validFacing("WEST")).toBe(true);

  })

  it('Test Facing: XXX is an invalid direction', () => {

    expect(service.validFacing("XXX")).toBe(false);

  })

});
