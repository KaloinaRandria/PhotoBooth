import { Component } from '@angular/core';

@Component({
  selector: 'app-list-staff',
  templateUrl: './list-staff.component.html',
  styleUrl: './list-staff.component.css'
})
export class ListStaffComponent {
  staff : any[]=[];

  constructor() {
  }
  getAllStaff():void {
    const api = '/membre/all';

  }
}
