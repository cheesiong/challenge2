import { stringify } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import { RobotService } from './robot.service';

@Injectable({
  providedIn: 'root'
})
export class CommandService {
  
  private validCommand = ['PLACE', 'MOVE', 'LEFT', 'RIGHT', 'REPORT'];

  private robot: RobotService;

  private output: string = "";

  constructor(private robotService: RobotService) { }

  processCommand(commandList) {

    let cmd = null;
    let coords = null;

    Object.keys(commandList.controls).forEach(key => {

      let commandLine = commandList.controls[key].value;

      if (commandLine) {
        [cmd, coords] = this.parseLine(commandLine);

        console.log("[CommandService->processCommand()] - cmd=[" + cmd +"]");

        switch (cmd) {
          case "PLACE":
            this.robotService.place(coords);
            break;
          case "MOVE":
            this.robotService.move();
            break;
          case "LEFT":
            this.robotService.left();
            break;
          case "RIGHT":
            this.robotService.right();
            break;
          case "REPORT":
            this.output = this.robotService.report();
            break;
          default:
            console.log("Invalid Command");
        }
      }

    });
    return this.output;
  }

  parseLine(line) {

    line = line.toUpperCase();   // converts string to uppercase

    console.log("[CommandService->parse] - line=["+ line + "]")
    
    let tokens = line.split(" ");
    let cmd = tokens[0];
    let coords = null;

    console.log("[CommandService->parse] - tokens[0]=[" + cmd + "]")

    if ( this.validCommand.includes(cmd) ) {

      if (cmd.includes("PLACE")) {

        if ( tokens.length < 2) {
          return;
        }
        else {
          let position = tokens[1].split(",");

          let x = position[0];
          let y = position[1];
          let facing = position[2];

          coords = new Map([
            ['x', x],
            ['y', y],
            ['facing', facing]
          ]);
        }
        
      }
      
    }
    
    return [cmd, coords];
  
  }
}
