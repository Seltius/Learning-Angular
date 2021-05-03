import {Component, OnInit} from '@angular/core';

@Component({
  // selector: '[app-servers]', SELECT BY ATTRIBUTE
  // selector: '.app-servers', SELECT BY CLASS
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
