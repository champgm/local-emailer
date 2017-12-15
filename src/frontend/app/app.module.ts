import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatSnackBarModule} from '@angular/material/snack-bar';

import { AppComponent } from './app.component';
import { ConfigurationService } from './configuration.service/configuration.service';
import { EmailButtonsComponent } from './email-buttons.component/email-buttons.component';
import { EmailService } from './email.service/email.service';

@NgModule({
  declarations: [
    AppComponent,
    EmailButtonsComponent
  ],
  imports: [
    MatSnackBarModule,
    NoopAnimationsModule,
    FlexLayoutModule,
    BrowserModule,
    HttpClientModule,
    ButtonsModule.forRoot(),
    FormsModule
  ],
  providers: [
    ConfigurationService,
    EmailService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
