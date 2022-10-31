import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
<<<<<<< HEAD
  title = 'Routing';
=======
  title = 'Servers';
  serverElements=[{
    type:'server',
    name:'test server',
    content: 'just a test'
  }];
  onServerAdded(serverdata: any){
    this.serverElements.push({
      type: 'server',
      name: serverdata.serverName,
      content: serverdata.serverContent
    })
  }
  onBlueprintAdded(serverdata: any){
    this.serverElements.push({
      type: 'blueprint',
      name: serverdata.serverName,
      content: serverdata.serverContent
    })
  }

>>>>>>> d409ce0 (deda)
}
