import {CommonModule} from '@angular/common';
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'HeaderComp',
  templateUrl: './HeaderComp.html',
  styleUrls: ['./HeaderComp.scss'],
  standalone: true,
  imports: [CommonModule],
  providers: [],
})
export class HeaderComp implements OnInit {


  constructor() {
  }

  ngOnInit(): void {
  }


}
