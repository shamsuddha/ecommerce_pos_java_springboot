import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'HomeComp',
  standalone: true,
  imports: [CommonModule, ],
  templateUrl: './HomeComp.html',
  styleUrl: './HomeComp.scss'
})
export class HomeComp implements OnInit {

  constructor() {  }

  ngOnInit(): void { }

}
