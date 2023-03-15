import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  searchInputVisibility: boolean = false;
  query: string = ''

  constructor() { }

  ngOnInit(): void {
  }

}
