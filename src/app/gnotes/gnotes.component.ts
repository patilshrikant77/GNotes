import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder,Validators, FormGroup} from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
@Component({
  selector: 'app-gnotes',
  templateUrl: './gnotes.component.html',
  styleUrls: ['./gnotes.component.scss']
})
export class GnotesComponent implements OnInit {
  nav_position: string = 'start';
  submitted = false;
  gNotesForm:FormGroup;
  gNote:Notes;
  
  gNotes:Notes[]=[
    {id:1,title:'Notes 1',description:"This is desp first"}
    ,{id:2,title:'Notes 2',description:"This is desp second"},
    {id:3,title:'Notes 3',description:"This is desp Third"}];

    

constructor(private fb: FormBuilder,private _snackBar: MatSnackBar) {

}
ngOnInit(){
  this.gNotesForm = this.fb.group({
    id:[''],
    title: ['',Validators.required],
    description: ['',Validators.required],
   });
   this.setGnotesFormData(this.gNotes[0]);
   
}

setGnotesFormData(gNote){
  this.gNote=gNote;
   this.gNotesForm.patchValue({  
      id: this.gNote.id
   })
}



readyForUpdate(note){
  this.setGnotesFormData(note);

}
get f() { return this.gNotesForm.controls; }

    onSubmit() {
      console.log('coming here',this.gNotesForm);
        this.submitted = true;
        if (this.gNotesForm.valid) {
          if(this.gNotesForm.value.id){
            this.updateNote(this.gNotesForm.value);

          }else{
            this.insertNote(this.gNotesForm.value);
          }
        
        }
    }

    insertNote(note){
      note.id=Math.max.apply(Math, this.gNotes.map(n=>n.id))+1;
      this.gNotes.push(note);
      this.setGnotesFormData(note);
      this.openSnackBar("G Notes added successfully", 'success');

    }

    updateNote(note){
      let foundIndex = this.gNotes.findIndex(x => x.id == note.id);
      this.gNotes[foundIndex]=note;
      this.setGnotesFormData(note);
      this.openSnackBar("G Notes updated successfully", 'success');

    }

    deleteNote(noteId){
      let foundIndex = this.gNotes.findIndex(x => x.id == noteId);
      this.gNotes.splice(foundIndex,1);
      if(noteId==this.gNote.id){
        this.onReset();
      }
      this.openSnackBar("G Notes deleted successfully", 'success');
    
    }

    onReset() {
        this.submitted = false;
        this.gNotesForm.reset();
    }
    openSnackBar(message: string, action: string) {
      this._snackBar.open(message, action, {
        duration: 2000,
        verticalPosition:'top',
        panelClass:'message'
      });
    }
 
}


export interface Notes {
  id: number;
  title: string;
  description:string
  
}
