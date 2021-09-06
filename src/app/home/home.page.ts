import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { CommandService } from '../services/command.service';
import { BoardService } from '../services/board.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public myForm: FormGroup;
  private commandCount: number = 1;

  public output: string = "";

  constructor(private formBuilder: FormBuilder, private commandService: CommandService, private boardService: BoardService){
    this.myForm = formBuilder.group({
      '1': ['', Validators.required]
    });

  }

  addCommand(){
    this.commandCount++;
    this.myForm.addControl(this.commandCount.toString(), new FormControl('', Validators.required));
  }

  removeCommand(control){
    this.myForm.removeControl(control.key);
  }

  processCommand(){

    this.output = this.commandService.processCommand(this.myForm);
    
    console.log("home->processCommand(): output=[" + this.output + "]");
  }

  reset() {
    this.myForm = this.formBuilder.group({
      '1': ['', Validators.required]
    });
    this.output = null;
  }
}
