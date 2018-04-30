import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule }    from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { FlexLayoutModule } from "@angular/flex-layout";


import { AppComponent } from './app.component';
import { GtRowsComponent } from './components/gt-rows/gt-rows.component';

//services
import { GtServiceModelService } from './services/gt-service-model.service';
import { GtDataEntryComponent } from './components/gt-data-entry/gt-data-entry.component';
@NgModule({
  declarations: [
    AppComponent,
    GtRowsComponent,
    GtDataEntryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    FlexLayoutModule,
    FormsModule
  ],
  providers: [GtServiceModelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
