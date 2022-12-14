import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ImgpageComponent } from './imgpage/imgpage.component';
import { LifeCycleComponent } from './life-cycle/life-cycle.component';
import { DirectivesComponent } from './directives/directives.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ImgpageComponent,
    LifeCycleComponent,
    DirectivesComponent
  ],
  imports: [
    BrowserModule,
    //FormsModule,RouterModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
