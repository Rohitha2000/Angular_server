import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
@Input('srvelement') element: {type: string, name:string, content:string}
  constructor() { }

  ngOnInit(): void {
  }

}
