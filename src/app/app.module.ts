import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {HomeComponent} from './home/home.component';
import { AppComponent } from './app.component';
import {AcercadeComponent} from "./acercade/acercade.component";
import {ContactoComponent} from "./contacto/contacto.component";
import {LoginComponent} from "./login/login.component";
import {BienvenidaComponent} from "./bienvenida/bienvenida.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AcercadeComponent,
    ContactoComponent,
    LoginComponent,
    BienvenidaComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot([
      {path:'inicio', component: HomeComponent},
      {path:'acercade', component: AcercadeComponent},
      {path:'contacto', component: ContactoComponent},
      {path:'login', component: LoginComponent},
      {path:'bienvenida', component: BienvenidaComponent},
      {path: '', redirectTo: 'inicio', pathMatch:'full'},
      {path:'**', redirectTo:'inicio', pathMatch:'full'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
