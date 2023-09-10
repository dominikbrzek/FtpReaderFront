import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {ConfigsListComponent} from './configs-list/configs-list.component';
import {HttpClientModule} from "@angular/common/http";
import {ConfigDetailsComponent} from './config-details/config-details.component';
import {AppRoutingModule} from "./app-routing.module";
import {CreateConfigComponent} from './create-config/create-config.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    ConfigsListComponent,
    ConfigDetailsComponent,
    CreateConfigComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
