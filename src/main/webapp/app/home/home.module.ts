import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PortioSharedModule } from 'app/shared/shared.module';
import { HOME_ROUTE } from './home.route';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [PortioSharedModule, RouterModule.forChild([HOME_ROUTE])],
  declarations: [HomeComponent],
})
export class PortioHomeModule {}
