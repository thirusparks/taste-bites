import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {TryService} from './service/try.service'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { TryComponent } from './try/try.component';
import { DataBindingComponent } from './data-binding/data-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    TryComponent,
    DataBindingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [TryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
