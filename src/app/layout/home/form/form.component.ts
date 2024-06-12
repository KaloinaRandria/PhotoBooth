import { Component } from '@angular/core';
import { FormBuilder, FormGroup} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {Display} from "../../../class/util/display";
import {FormService} from "../../../service/form/form.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  form: FormGroup;
  fileName: string = '';

  formulaire: FormGroup;

  constructor(private fb: FormBuilder, private formService: FormService, private snackBar : MatSnackBar) {
    this.form = this.fb.group({
      name: [''],
      email: [''],
      password: [''],
      gender: [''],
      file: [null],
      birthday: [''],
      begin: [''],
      textarea: [''],
      category: ['']
    });

    this.formulaire = this.fb.group({
      text: [''],
      email: [''],
      password: [''],
      textarea: [''],
      number: [''],
      date: [''],
      datetime: [''],
      color: [''],
      select: [''],
      checkbox: [''],
      radio: ['']
    });
  }

  triggerFileInputClick() {
    const fileInput = document.getElementById('fileInput') as HTMLElement;
    fileInput.click();
  }

  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.form.patchValue({
        file: file
      });
      this.fileName = file.name;
    }
  }

  submitForm() {
    const formData = new FormData();

    formData.append('file', this.form.get('file')?.value);

    const data = {
      name: this.form.get('name')?.value,
      email: this.form.get('email')?.value,
      password: this.form.get('password')?.value,
      gender: this.form.get('gender')?.value,
      birthday: this.form.get('birthday')?.value,
      begin: this.form.get('begin')?.value,
      textarea: this.form.get('textarea')?.value,
      category: this.form.get('category')?.value
    };

    // Ajouter les données textuelles sous forme de JSON
    formData.append('data', new Blob([JSON.stringify(data)], { type: 'application/json' }));

    // Envoyer la requête
    this.formService.formSend(formData).subscribe({
      next: (response) => {
        Display.alert(this.snackBar, "Sended successfully", "close", 3000, 'success-snackbar');
      },
      error: (exception) => {
        Display.alert(this.snackBar, (exception.error.message), "close", 6000);
      }
    });
  }

  submitFormulaire() {
    const data = {
      text: this.formulaire.get('text')?.value,
      email: this.formulaire.get('email')?.value,
      password: this.formulaire.get('password')?.value,
      textarea: this.formulaire.get('textarea')?.value,
      number: this.formulaire.get('number')?.value,
      date: this.formulaire.get('date')?.value,
      datetime: this.formulaire.get('datetime')?.value,
      color: this.formulaire.get('color')?.value,
      select: this.formulaire.get('select')?.value,
      checkbox: this.formulaire.get('checkbox')?.value,
      radio: this.formulaire.get('radio')?.value
    };

    console.log(data);

    this.formService.formulaireSend(data).subscribe({
      next: (response) => {
        Display.alert(this.snackBar, "Sended successfully", "close", 3000, 'success-snackbar');
      },
      error: (exception) => {
        Display.alert(this.snackBar, (exception.error.message), "close", 6000);
      }
    });
  }
}
