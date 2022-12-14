import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormTestComponent } from './form-test/form-test.component';
import { ServComponent } from './serv/serv.component';
import { DataServService } from './data-serv.service';

import { RouterModule } from '@angular/router';
//import { routes } from './app.routing';             
import { HelloComponent, HiComponent, IllegalRequestComponent, TestComponent } from './hello/hello.component';
import { AppRoutingRoutingModule } from './app2.routing.module';

@NgModule({
  declarations: [
    AppComponent,
    FormTestComponent,
    ServComponent,
    HelloComponent,
    HiComponent,
    TestComponent,
    IllegalRequestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
  //  RouterModule.forRoot(routes),
    AppRoutingRoutingModule
  ],
  providers: [ DataServService,UserDetailsService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
