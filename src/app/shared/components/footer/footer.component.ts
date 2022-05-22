import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  copy : any;

  constructor() {

    const date = new Date();
    const year = date.getFullYear();
    this.copy = year;
   }

  ngOnInit(): void {
  }

}
