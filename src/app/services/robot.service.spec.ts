import { TestBed } from '@angular/core/testing';

import { RobotService } from './robot.service';

describe('RobotService', () => {
  
  let service: RobotService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RobotService);
  });

  it('RobotService created successfully', () => {
    expect(service).toBeTruthy();
  });

  it('Test Facing Direction: <whiltespace>SOUTH<whitespace> is a valid direction', () => {

    expect(service.validFacing(" SOUTH ")).toBeTrue;

  });
  
  it('Test Facing Direction: <whiltespace>NORTH<whitespace> is a valid direction', () => {

    expect(service.validFacing(" NORTH ")).toBeTrue;

  })

  it('Test Facing Direction: <whiltespace>EAST<whitespace> is a valid direction', () => {

    expect(service.validFacing(" EAST ")).toBeTrue;

  })

  it('Test Facing Direction: <whiltespace>WEST<whitespace> is a valid direction', () => {

    expect(service.validFacing(" WEST ")).toBeTrue;

  })

  it('Test Facing Direction: XXX is an invalid direction', () => {

    expect(service.validFacing("XXX")).toBeFalse;

  })


  it('Test Boundary: At (0,0,SOUTH), move should be remains at (0,0,SOUTH)', () => {
    service.setPosition(0,0,'SOUTH');
    service.move();

    expect(service.report()).toEqual("0,0,SOUTH");

  });

  it('Test Boundary: At (0,0,WEST), move should be remains at (0,0,WEST)', () => {
    service.setPosition(0,0,'WEST');
    service.move();

    expect(service.report()).toEqual("0,0,WEST");

  });

  it('Test Boundary: At (0,4,NORTH), move should be remains at (0,4,NORTH)', () => {
    service.setPosition(0,4,'NORTH');
    service.move();

    expect(service.report()).toEqual("0,4,NORTH");

  });

  it('Test Boundary: At (0,4,WEST), move should be remains at (0,4,WEST)', () => {
    service.setPosition(0,4,'WEST');
    service.move();

    expect(service.report()).toEqual("0,4,WEST");

  });

  it('Test Boundary: At (4,0,SOUTH), move should be remains at (4,0,SOUTH)', () => {
    service.setPosition(4,0,'SOUTH');
    service.move();

    expect(service.report()).toEqual("4,0,SOUTH");

  });

  it('Test Boundary: At (4,0,EAST), move should be remains at (4,0,EAST)', () => {
    service.setPosition(4,0,'EAST');
    service.move();

    expect(service.report()).toEqual("4,0,EAST");

  });

  it('Test Boundary: At (4,4,WEST), move should be remains at (3,4,WEST)', () => {
    service.setPosition(4,4,'WEST');
    service.move();

    expect(service.report()).toEqual("3,4,WEST");

  });

  it('Test Boundary: At (4,4,NORTH), move should be remains at (4,4,NORTH)', () => {
    service.setPosition(4,4,'NORTH');
    service.move();

    expect(service.report()).toEqual("4,4,NORTH");

  });

  
  it('Test Boundary: At (4,4,EAST), move should be remains at (4,4,EAST)', () => {
    service.setPosition(4,4,'EAST');
    service.move();

    expect(service.report()).toEqual("4,4,EAST");

  });

  it('Test Invalid Position: (5,5) is invalid', () => {
    service.setPosition(5,5,'EAST');
    
    expect(service.report()).toBeNaN;
  });

  it('Test Invalid Position: (-1,-1) is invalid', () => {
    service.setPosition(-1,-1,'EAST');
    
    expect(service.report()).toBeNaN;

  });

  it('Test Invalid Position: (5,0) is invalid', () => {
    service.setPosition(5,0,'EAST');
    
    expect(service.report()).toBeNaN;

  });

  it('Test Invalid Position: (0,5) is invalid', () => {
    service.setPosition(0,5,'EAST');
    
    expect(service.report()).toBeNaN;

  });

  it('Test Invalid Position: (0,-1) is invalid', () => {
    service.setPosition(0,-1,'EAST');
    
    expect(service.report()).toBeNaN;

  });

  it('Test Invalid Position: (-1,0) is invalid', () => {
    service.setPosition(-1,0,'EAST');
    
    expect(service.report()).toBeNaN;

  });

  it('Test Movement: At (1,3,NORTH), left should be (1,3,WEST)', () => {
      service.setPosition(1, 3, 'NORTH');
      service.left();
  
      expect(service.report()).toEqual("1,3,WEST");

  });

  it('Test Movement: At (1,3,NORTH), right should be (1,3,EAST)', () => {
    service.setPosition(1, 3, 'NORTH');
    service.right();

    expect(service.report()).toEqual("1,3,EAST");
  
  });

  it('Test Movement: At (1,3,SOUTH), left should be (1,3,EAST)', () => {
    service.setPosition(1, 3, 'SOUTH');
    service.left();

    expect(service.report()).toEqual("1,3,EAST");
  
  });

  it('Test Movement: At (1,3,SOUTH), right should be (1,3,WEST)', () => {
    service.setPosition(1, 3, 'SOUTH');
    service.right();

    expect(service.report()).toEqual("1,3,WEST");
  
  });
  
  it('Test Movement: At (1,3,EAST), left should be (1,3,NORTH)', () => {
    service.setPosition(1, 3, 'EAST');
    service.left();

    expect(service.report()).toEqual("1,3,NORTH");
  
  });

  it('Test Movement: At (1,3,EAST), right should be (1,3,SOUTH)', () => {
    service.setPosition(1, 3, 'EAST');
    service.right();

    expect(service.report()).toEqual("1,3,SOUTH");
  
  });

  it('Test Movement: At (1,3,WEST), left should be (1,3,SOUTH)', () => {
    service.setPosition(1, 3, 'WEST');
    service.left();

    expect(service.report()).toEqual("1,3,SOUTH");
  
  });

  it('Test Movement: At (1,3,WEST), right should be (1,3,NORTH)', () => {
    service.setPosition(1, 3, 'WEST');
    service.right();

    expect(service.report()).toEqual("1,3,NORTH");
  
  });

  
  it('Test Output: PLACE 1,1,NORTH->MOVE->REPORT is 1,2,NORTH', () => {
    service.setPosition(1, 1, 'NORTH');
    service.move();

    expect(service.report()).toEqual("1,2,NORTH");
  
  });

  
  it('Test Output: PLACE 1,1,NORTH->LEFT->REPORT is 1,1,WEST', () => {
    service.setPosition(1, 1, 'NORTH');
    service.left();

    expect(service.report()).toEqual("1,1,WEST");
  
  });


});
