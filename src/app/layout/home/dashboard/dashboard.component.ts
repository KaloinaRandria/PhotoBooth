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

  constructor(
    private titleService: Title
  ) { }

  ngOnInit() {
    this.titleService.setTitle("PB | Dashboard");
  }
}
