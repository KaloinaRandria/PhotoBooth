import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-insert-staff',
  templateUrl: './insert-staff.component.html',
  styleUrl: './insert-staff.component.css'
})
export class InsertStaffComponent {
  form : FormGroup;

  constructor(fBuilder : FormBuilder) {
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
      poste : this.form.get('post')?.value,
      date_embauche : this.form.get('date_embauche')?.value,
    // mbola tsy misy salaire sy role 
    };
   }

}
