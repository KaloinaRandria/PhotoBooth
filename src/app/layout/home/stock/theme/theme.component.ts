import {Component, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrl: './theme.component.css'
})
export class ThemeComponent implements OnInit {

  constructor(private titleService: Title) {
  }
  ngOnInit() {
    this.titleService.setTitle("PB | Theme")
  }

}
