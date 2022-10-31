import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CockpitComponent } from './cockpit/cockpit.component';
import { ServerComponent } from './server/server.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    CockpitComponent,
    ServerComponent
  ],
  imports: [
    BrowserModule,
<<<<<<< HEAD
    AppRoutingModule
=======
    FormsModule,
    NgbModule
>>>>>>> d409ce0 (deda)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
