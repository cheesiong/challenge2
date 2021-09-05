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

  it('Test Boundary: At (0,0,SOUTH), move should be remains at (0,0,SOUTH)', () => {
    let coords = service.getPosition(0,0,'SOUTH');
    service.place(coords);
    service.move();

    expect(service.report()).toEqual("0,0,SOUTH");

  });

  it('Test Boundary: At (0,0,WEST), move should be remains at (0,0,WEST)', () => {
    let coords = service.getPosition(0,0,'WEST');
    service.place(coords);
    service.move();

    expect(service.report()).toEqual("0,0,WEST");

  });

  it('Test Boundary: At (0,4,NORTH), move should be remains at (0,4,NORTH)', () => {
    let coords = service.getPosition(0,4,'NORTH');
    service.place(coords);
    service.move();

    expect(service.report()).toEqual("0,4,NORTH");

  });

  it('Test Boundary: At (0,4,WEST), move should be remains at (0,4,WEST)', () => {
    let coords = service.getPosition(0,4,'WEST');
    service.place(coords);
    service.move();

    expect(service.report()).toEqual("0,4,WEST");

  });

  it('Test Boundary: At (4,0,EAST), move should be remains at (4,0,EAST)', () => {
    let coords = service.getPosition(4,0,'EAST');
    service.place(coords);
    service.move();

    expect(service.report()).toEqual("4,0,EAST");

  });

  it('Test Boundary: At (4,0,SOUTH), move should be remains at (4,0,SOUTH)', () => {
    let coords = service.getPosition(4,0,'SOUTH');
    service.place(coords);
    service.move();

    expect(service.report()).toEqual("4,0,SOUTH");

  });

  it('Test Boundary: At (4,4,NORTH), move should be remains at (4,4,NORTH)', () => {
    let coords = service.getPosition(4,4,'NORTH');
    service.place(coords);
    service.move();

    expect(service.report()).toEqual("4,4,NORTH");

  });

  it('Test Boundary: At (4,4,EAST), move should be remains at (4,4,EAST)', () => {
    let coords = service.getPosition(4,4,'EAST');
    service.place(coords);
    service.move();

    expect(service.report()).toEqual("4,4,EAST");

  });

  it('Test Movement: At (0,0,NORTH), move should be (0,1,NORTH)', () => {
    let coords = service.getPosition(0,0,'NORTH');
    service.place(coords);
    service.move();

    expect(service.report()).toEqual("0,1,NORTH");

  });

  it('Test Movement: At (0,0,EAST), move should be (1,0,EAST)', () => {
    let coords = service.getPosition(0,0,'EAST');
    service.place(coords);
    service.move();

    expect(service.report()).toEqual("1,0,EAST");

  });

  it('Test Movement: At (1,3,NORTH), left should be (1,3,WEST)', () => {
      let coords = service.getPosition(1, 3, 'NORTH');
      service.place(coords);
      service.left();
  
      expect(service.report()).toEqual("1,3,WEST");

  });

  it('Test Movement: At (1,3,NORTH), right should be (1,3,EAST)', () => {
    let coords = service.getPosition(1, 3, 'NORTH');
    service.place(coords);
    service.right();

    expect(service.report()).toEqual("1,3,EAST");
  
  });

  it('Test Movement: At (1,3,SOUTH), left should be (1,3,EAST)', () => {
    let coords = service.getPosition(1, 3, 'SOUTH');
    service.place(coords);
    service.left();

    expect(service.report()).toEqual("1,3,EAST");
  
  });

  it('Test Movement: At (1,3,SOUTH), right should be (1,3,WEST)', () => {
    let coords = service.getPosition(1, 3, 'SOUTH');
    service.place(coords);
    service.right();

    expect(service.report()).toEqual("1,3,WEST");
  
  });
  
  it('Test Movement: At (1,3,EAST), left should be (1,3,NORTH)', () => {
    let coords = service.getPosition(1, 3, 'EAST');
    service.place(coords);
    service.left();

    expect(service.report()).toEqual("1,3,NORTH");
  
  });

  it('Test Movement: At (1,3,EAST), right should be (1,3,SOUTH)', () => {
    let coords = service.getPosition(1, 3, 'EAST');
    service.place(coords);
    service.right();

    expect(service.report()).toEqual("1,3,SOUTH");
  
  });

  it('Test Movement: At (1,3,WEST), left should be (1,3,SOUTH)', () => {
    let coords = service.getPosition(1, 3, 'WEST');
    service.place(coords);
    service.left();

    expect(service.report()).toEqual("1,3,SOUTH");
  
  });

  it('Test Movement: At (1,3,WEST), right should be (1,3,NORTH)', () => {
    let coords = service.getPosition(1, 3, 'WEST');
    service.place(coords);
    service.right();

    expect(service.report()).toEqual("1,3,NORTH");
  
  });

  it('Test Output: PLACE 0,0,NORTH->MOVE->REPORT is 0,1,NORTH', () => {
    let coords = service.getPosition(0, 0, 'NORTH');
    service.place(coords);
    service.move();

    expect(service.report()).toEqual("0,1,NORTH");
  
  });

  it('Test Output: PLACE 0,0,NORTH->LEFT->REPORT is 0,0,WEST', () => {
    let coords = service.getPosition(0, 0, 'NORTH');
    service.place(coords);
    service.left();

    expect(service.report()).toEqual("0,0,WEST");
  
  });




});
