import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { PortioSharedModule } from 'app/shared/shared.module';
import { PortioCoreModule } from 'app/core/core.module';
import { PortioAppRoutingModule } from './app-routing.module';
import { PortioHomeModule } from './home/home.module';
import { PortioEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    PortioSharedModule,
    PortioCoreModule,
    PortioHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    PortioEntityModule,
    PortioAppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent],
})
export class PortioAppModule {}
