import {Component, OnInit} from '@angular/core';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import {MatSnackBar} from "@angular/material/snack-bar";
import {DashboardService} from "../../../service/dashboard/dashboard.service";
import {Title} from "@angular/platform-browser";
import {Display} from "../../../class/util/display";
import {PdfService} from "../../../service/pdf/pdf.service";

@Component({
  selector: 'app-pdf',
  templateUrl: './pdf.component.html',
  styleUrls: ['./pdf.component.css']
})
export class PdfComponent implements OnInit{
  tableName: string = '';

  constructor(
    private snackBar: MatSnackBar,
    private titleService: Title,
    private pdfService: PdfService
  ) { }

  ngOnInit() {
    this.titleService.setTitle("PB | PDF");
  }

  generatePDF() {
    const doc = new jsPDF();

    // Ajouter un titre
    doc.setFontSize(18);
    doc.text('Titre du Document', 14, 22);

    // Ajouter un sous-titre ou texte
    doc.setFontSize(12);
    doc.text('Ceci est un exemple de texte qui sera affiché dans le PDF.', 14, 32);
    doc.text('Vous pouvez ajouter plusieurs lignes de texte ici.', 14, 40);

    // Ajouter un espace avant le tableau
    doc.setFontSize(10);
    doc.text(' ', 14, 50);

    // Définir les en-têtes et les données du tableau
    const head = [['ID', 'Name', 'Country']];
    const data = [
      [1, 'John Doe', 'USA'],
      [2, 'Anna Smith', 'UK'],
      [3, 'Peter Jones', 'Canada'],
    ];

    // Générer le tableau avec un décalage vertical pour éviter la superposition avec le texte précédent
    (doc as any).autoTable({
      startY: 60,  // Position verticale où le tableau commence
      head: head,
      body: data,
    });

    // Sauvegarder le document PDF
    doc.save('table.pdf');
  }

  export() {
    const tableName = this.tableName;
    if (this.tableName == '') {
      Display.alert(this.snackBar, "No selected table", "Ok", 5000);
      return;
    }

    this.pdfService.export(tableName).subscribe({
      next: (response) => {
        console.log(response);
        this.generatePDFTABLE(response.data, tableName);
      },
      error: (exception) => {
        Display.alert(this.snackBar, (exception.error.message), "close", 6000);
      }
    });
  }

  private generatePDFTABLE(table: any, tableName: string) {
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text(tableName.toUpperCase(), 14, 22);

    const head = [table.headers];
    const data = table.rows;

    (doc as any).autoTable({
      startY: 25,
      head: head,
      body: data,
    });

    doc.save(tableName + '.pdf');
  }
}
