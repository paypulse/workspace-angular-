import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//수동 component 추가
import { ComponentOverviewComponent } from './cExample1.component';

import { HeroChildComponent } from './hero-child.component';
import { HeroParentComponent } from './hero-parent.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentOverviewComponent,
    HeroChildComponent,
    HeroParentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
