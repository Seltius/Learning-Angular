import {Component, OnInit} from '@angular/core';

@Component({
  // selector: '[app-servers]', SELECT BY ATTRIBUTE
  // selector: '.app-servers', SELECT BY CLASS
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = '';
  userName = '';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {
  }

  onCreateServer(): void {
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
  }

  onUpdateServerName(event: any): void {
    this.serverName = event.target.value;
  }

  onReset(): void {
    this.userName = '';
  }

}
