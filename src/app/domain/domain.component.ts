import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-domain',
  templateUrl: './domain.component.html',
  styleUrls: ['./domain.component.css']
})
export class DomainComponent implements OnInit {

  selectedValues: string[] = ['net','com','cm','ktc','org'];
  constructor() { }

  ngOnInit(): void {
  }

}
