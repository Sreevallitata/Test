import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
    '.background {background: coral; color: white}',
    'li a { color: white; display: block}',
    'ul.nav a:hover { color: black  }',
    '.container-fluid{display: block}',
    '.container-fluid.ul.li.a.img{ border-radius: 10px}'
  ]
})
export class HeaderComponent implements OnInit{
  constructor(private titleService: Title) {}

  ngOnInit() {
    this.titleService.setTitle('Home');
  }
}
