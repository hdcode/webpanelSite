
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  selectedValues: string[] = ['net','com','cm','ktc','org'];
  
  constructor() { }

  ngOnInit(): void {
  }

}
