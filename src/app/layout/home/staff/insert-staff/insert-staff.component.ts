import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {FormService} from "../../../../service/form/form.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Display} from "../../../../class/util/display";

@Component({
  selector: 'app-insert-staff',
  templateUrl: './insert-staff.component.html',
  styleUrl: './insert-staff.component.css'
})
export class InsertStaffComponent {
  form : FormGroup;

  constructor(private fBuilder : FormBuilder , private formService : FormService , private snackBar : MatSnackBar) {
     this.form = fBuilder.group({
       prenom : [''],
       nom : [''],
       username : [''],
       dtn : [''],
       mail : [''],
       mdp : [''],
       role : [''],
       post : [''],
       date_embauche : [''],
       salaire : ['']
     })
   }

   submitForm() {
    const data ={
      prenom : this.form.get('prenom')?.value,
      nom : this.form.get('nom')?.value,
      username : this.form.get('username')?.value,
      mail : this.form.get('mail')?.value,
      mot_de_passe : this.form.get('mdp')?.value,
      date_embauche : this.form.get('date_embauche')?.value,
      role : {
        id_role : this.form.get('role')?.value
      },
      poste : {
        id_poste : this.form.get('post')?.value
      }
    };

    this.formService.formulaireSend(data).subscribe({
      next:(response)=> {
        Display.alert(this.snackBar , "Sended Succesfully","close",3000,"succes-snackbar");
      },
      error:(exeption) => {
        Display.alert(this.snackBar,(exeption.error.message),"close",6000);
      }
    });
   }

}
