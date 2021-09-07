import { stringify } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import { RobotService } from './robot.service';

@Injectable({
  providedIn: 'root'
})
export class CommandService {
  
  private output: string = "";

  constructor(private robotService: RobotService) { }

  processCommand(commandList) {

    Object.keys(commandList.controls).forEach(key => {

      let line = commandList.controls[key].value;
      
      this.process(line);

    });
    return this.output;
  }

  process(line) {

    let cmd = null;
    let coords = null;

    if (line) {
      line = line.trim().toUpperCase();     // converts string to uppercase

      let tokens = line.split(" ");         // extracts the command word
      cmd = tokens[0];

      console.log("[CommandService->process()] - cmd=[" + cmd +"]");

      switch (cmd) {
          case "PLACE":
            let stripLine = line.replace("PLACE","");
            coords = this.getCoords(stripLine);
            if (coords)
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

    return[cmd, coords];
  }

  getCoords(line) {

    let tokens = line.split(",");
    
    if (tokens.length != 3)
      return;

    let x = tokens[0].trim();
    let y = tokens[1].trim();
    let facing = tokens[2].trim();

    let coords = new Map([
            ['x', x],
            ['y', y],
            ['facing', facing]
          ]);
        
    return coords;
      
  }
    
}
