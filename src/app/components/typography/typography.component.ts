import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-typography',
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.css']
})
export class TypographyComponent implements OnInit {

  headerTags = "h1,h2,h3,h4 tags"
  constructor() { }

  ngOnInit(): void {
  }

}
