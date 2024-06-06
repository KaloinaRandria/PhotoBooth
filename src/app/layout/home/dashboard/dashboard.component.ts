import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Display} from "../../../class/util/display";
import {MatSnackBar} from "@angular/material/snack-bar";
import {User} from "../../../class/model/user/user";
import {DataSecurity} from "../../../class/util/data-security";
import {DashboardService} from "../../../service/dashboard/dashboard.service";
import {Title} from "@angular/platform-browser";
import html2pdf from 'html2pdf.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  @ViewChild('fileInput') fileInput: ElementRef | undefined;
  @ViewChild('csvInput') csvInput: ElementRef | undefined;
  @ViewChild('tableInput') tableInput: ElementRef | undefined;

  fileName: string = '';
  csvName: string = '';
  tableName: string = '';
  userList: any[] = [];
  tableNameInout: string = '';

  constructor(
    private dashService: DashboardService,
    private snackBar: MatSnackBar,
    private titleService: Title
  ) { }

  ngOnInit() {
    this.titleService.setTitle("PB | Dashboard");
    this.initUser();
  }

  browseFiles(inputId: string) {
    if (this.fileInput && inputId == 'fileInput') {
      this.fileInput.nativeElement.click();
    } else if (this.csvInput && inputId == 'csvInput') {
      this.csvInput.nativeElement.click();
    } else if (this.tableInput && inputId == 'tableInput') {
      this.tableInput.nativeElement.click();
    }
  }

  onFileSelected(event: any, inputId: string) {
    const file: File = event.target.files[0];

    if (inputId == 'fileInput') {
      this.fileName = file.name;
    } else if(inputId == 'csvInput') {
      this.csvName = file.name;
    } else if(inputId == 'tableInput') {
      this.tableName = file.name;
    }

  }

  upload() {
    if (!this.fileInput || !this.fileInput.nativeElement.files[0]) {
      Display.alert(this.snackBar, "No selected file", "Ok", 5000);
      return;
    }

    const fileToUpload: File = this.fileInput.nativeElement.files[0];
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);

    this.dashService.upload(formData).subscribe({
      next: (response) => {
        Display.alert(this.snackBar, "Uploaded successfully", "close", 3000, 'success-snackbar');
      },
      error: (exception) => {
        Display.alert(this.snackBar, (exception.error.message), "close", 6000);
      }
    });
  }

  uploadCsv() {
    if (!this.csvInput || !this.csvInput.nativeElement.files[0]) {
      Display.alert(this.snackBar, "No selected file", "Ok", 5000);
      return;
    }

    const fileToUpload: File = this.csvInput.nativeElement.files[0];
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);

    this.dashService.uploadCsv(formData).subscribe({
      next: (response) => {
        Display.alert(this.snackBar, "Uploaded successfully", "close", 3000, 'success-snackbar');
      },
      error: (exception) => {
        Display.alert(this.snackBar, (exception.error.message), "close", 6000);
      }
    });
  }

  uploadCsvTable() {
    console.log(this.tableNameInout);
    if (!this.tableInput || !this.tableInput.nativeElement.files[0] || this.tableNameInout == '') {
      Display.alert(this.snackBar, "No selected file || empty field", "Ok", 5000);
      return;
    }

    const fileToUpload: File = this.tableInput.nativeElement.files[0];
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);
    formData.append('tableName', this.tableNameInout);

    this.dashService.uploadCsvTable(formData).subscribe({
      next: (response) => {
        Display.alert(this.snackBar, "Uploaded successfully", "close", 3000, 'success-snackbar');
      },
      error: (exception) => {
        Display.alert(this.snackBar, (exception.error.message), "close", 6000);
      }
    });
  }

  initUser() {
    this.dashService.getAllUser().subscribe({
      next: (response) => {
        this.userList = response.data;
      },
      error: (exception) => {
        Display.alert(this.snackBar, (exception.error.message + " | " + exception.message), "close", 6000);
      }
    });
  }

  generatePDF() {
    const element = document.getElementById('contentToConvert');

    const options = {
      filename: 'mon-document.pdf',
      margin: [10, 10, 10, 10],
      html2canvas: {},
      jsPDF: { orientation: 'portrait' }
    };

    html2pdf()
      .set(options)
      .from(element)
      .save();
  }
}
