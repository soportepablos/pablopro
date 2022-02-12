import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavmenuComponent } from './components/navmenu/navmenu.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { ExperiComponent } from './components/experi/experi.component';
import { EducaComponent } from './components/educa/educa.component';
import { SkillsComponent } from './components/skills/skills.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { WebComponent } from './components/web/web.component';

import { RouteModule } from './route/route.module';
import {APP_BASE_HREF} from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    NavmenuComponent,
    HeaderComponent,
    AboutComponent,
    ExperiComponent,
    EducaComponent,
    SkillsComponent,
    PortfolioComponent,
    FooterComponent,
    LoginComponent,
    WebComponent,
  ],
  imports: [
    BrowserModule,
    RouteModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ {provide: APP_BASE_HREF, useValue: '/'} ],
  bootstrap: [AppComponent]
})
export class AppModule { }
