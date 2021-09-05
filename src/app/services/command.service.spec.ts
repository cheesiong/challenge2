import { TestBed } from '@angular/core/testing';

import { CommandService } from './command.service';

describe('CommandService', () => {
  let service: CommandService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommandService);
  });

  it('CommandService created successfully', () => {
    expect(service).toBeTruthy();
  });

  it('PLACE 0,0,NORTH results in PLACE command', () => {

    let cmd = null;
    let coords = null;
    let line = "PLACE 0,0,NORTH";

    [cmd, coords] = service.parseLine(line);
    expect(cmd).toEqual("PLACE");
  });

  it('place 0,0,NORTH results in PLACE command (even it is lowercase)', () => {

    let cmd = null;
    let coords = null;
    let line = "PLACE 0,0,NORTH";

    [cmd, coords] = service.parseLine(line);
    expect(cmd).toEqual("PLACE");
  });

  it('placing 0,0,NORTH is an invalid command, ignore it', () => {

    let cmd = null;
    let coords = null;
    let line = "PLACING 0,0,NORTH";

    [cmd, coords] = service.parseLine(line);
    expect(coords).toBeNull();
    
  });

  it('MOVE is valid command', () => {

    let cmd = null;
    let coords = null;
    let line = "MOVE";

    [cmd, coords] = service.parseLine(line);
    expect(cmd).toEqual("MOVE");
  });

  it('LEFT is valid command', () => {

    let cmd = null;
    let coords = null;
    let line = "LEFT";

    [cmd, coords] = service.parseLine(line);
    expect(cmd).toEqual("LEFT");
  });

  it('RIGHT is valid command', () => {

    let cmd = null;
    let coords = null;
    let line = "RIGHT";

    [cmd, coords] = service.parseLine(line);
    expect(cmd).toEqual("RIGHT");
  });

  it('LEFTXX is an invalid command, ignore it', () => {

    let cmd = null;
    let coords = null;
    let line = "LEFTXXX";

    [cmd, coords] = service.parseLine(line);

    expect(coords).toBeNull();
  });



});
