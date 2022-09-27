import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AproposComponent } from './apropos/apropos.component';
import { ContactComponent } from './contact/contact.component';
import { DomainComponent } from './domain/domain.component';
import { FeaturesComponent } from './features/features.component';
import { HomeComponent } from './home/home.component';
import { HostingComponent } from './hosting/hosting.component';
import { PrixComponent } from './prix/prix.component';

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'domain', component: DomainComponent},
  {path: 'hosting', component: HostingComponent},
  {path: 'apropos', component: AproposComponent},
  {path: 'prix', component: PrixComponent},
  {path: 'features', component: FeaturesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
