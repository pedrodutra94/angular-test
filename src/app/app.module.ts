import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataListComponent } from './data-list/data-list.component';
import { counterReducer } from './store/reducers/counter.reducer';
import { MyCounterComponent } from './my-counter/my-counter.component';
import { AnotherCounterComponent } from './another-counter/another-counter.component';

@NgModule({
  declarations: [
    AppComponent,
    DataListComponent,
    MyCounterComponent,
    AnotherCounterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot({
      count: counterReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
