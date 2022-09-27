import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AproposComponent } from './apropos/apropos.component';
import { HostingComponent } from './hosting/hosting.component';
import { DomainComponent } from './domain/domain.component';
import { PrixComponent } from './prix/prix.component';
import { ContactComponent } from './contact/contact.component';
import { FeaturesComponent } from './features/features.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AproposComponent,
    HostingComponent,
    DomainComponent,
    PrixComponent,
    ContactComponent,
    FeaturesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
