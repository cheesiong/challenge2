import { Output } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { CommandService } from './command.service';
import { RobotService } from './robot.service';

describe('CommandService', () => {
  let service: CommandService;
  let robot: RobotService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommandService);
    robot = TestBed.inject(RobotService);
  });

  it('CommandService created successfully', () => {
    expect(service).toBeTruthy();
  });

  it('Test whitespace:  PLACE 0  , 0  ,  NORTH is valid', () => {

    let line = "   PLACE 0  , 0  ,  NORTH ";
    let cmd = null;
    let coords = null;

    [cmd, coords] = service.process(line);

    expect(cmd).toEqual("PLACE");
    expect(robot.report()).toEqual("0,0,NORTH");

  });

  it('Test Lowercase: place 0,0,NORTH results in valid PLACE command', () => {

    let line = "place 0,0,NORTH";
    let cmd = null;
    let coords = null;
    
    [cmd, coords] = service.process(line);
    
    expect(cmd).toEqual("PLACE");
    expect(robot.report()).toEqual("0,0,NORTH");
    
  });

  it('Test Invalid Command: placing 0,0,NORTH is an invalid command, ignore it', () => {

    let cmd = null;
    let coords = null;
    let line = "PLACING 0,0,NORTH";

    [cmd, coords] = service.process(line);
    expect(coords).toBeNull();
    
  });

  it('Test Valid Command: MOVE is valid command', () => {

    let cmd = null;
    let coords = null;
    let line = "MOVE";

    [cmd, coords] = service.process(line);
    expect(cmd).toEqual("MOVE");
  });

  it('Test Valid Command: REPORT is valid command', () => {

    let cmd = null;
    let coords = null;
    let line = "REPORT 0,0,NORTH";

    [cmd, coords] = service.process(line);
    expect(cmd).toEqual("REPORT");
  });

  it('Test Valid Command: RIGHT is valid command', () => {

    let cmd = null;
    let coords = new Map([
      ['x', '0'],
      ['y', '0'],
      ['facing', 'NORTH']
    ]);

    robot.place(coords);

    let line = "RIGHT";

    [cmd, coords] = service.process(line);
    expect(cmd).toEqual("RIGHT");
  });

  it('Test Valid Command: LEFT is valid command', () => {

    let cmd = null;
    let coords = new Map([
      ['x', '0'],
      ['y', '0'],
      ['facing', 'NORTH']
    ]);

    robot.place(coords);

    let line = "LEFT";

    [cmd, coords] = service.process(line);
    expect(cmd).toEqual("LEFT");
  });

  it('Test Invalid Command: LEFTING is invalid command, ignore it', () => {

    let cmd = null;
    let coords = new Map([
      ['x', '0'],
      ['y', '0'],
      ['facing', 'NORTH']
    ]);

    robot.place(coords);
    
    let line = "LEFTING";

    [cmd, coords] = service.process(line);
    expect(coords).toBeNull();

  });

  it('Test Invalid Command: RIGHTING is invalid command, ignore it', () => {

    let cmd = null;
    let coords = new Map([
      ['x', '0'],
      ['y', '0'],
      ['facing', 'NORTH']
    ]);

    robot.place(coords);
    
    let line = "RIGHTING";

    [cmd, coords] = service.process(line);
    expect(coords).toBeNull();

  });

  it('Test Invalid Command: MOVING is invalid command, ignore it', () => {

    let cmd = null;
    let coords = new Map([
      ['x', '0'],
      ['y', '0'],
      ['facing', 'NORTH']
    ]);

    robot.place(coords);
    
    let line = "MOVING";

    [cmd, coords] = service.process(line);
    expect(coords).toBeNull();

  });

});
