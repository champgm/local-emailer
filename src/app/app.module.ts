import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ConfigurationService } from './configuration.service/configuration.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ButtonsModule.forRoot(),
    FormsModule
  ],
  providers: [
    ConfigurationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
