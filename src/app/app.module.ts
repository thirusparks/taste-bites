import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {TryService} from './service/try.service'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { TryComponent } from './try/try.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';

@NgModule({
  declarations: [
    AppComponent,
    TryComponent,
    ChildComponent,
    ParentComponent
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
