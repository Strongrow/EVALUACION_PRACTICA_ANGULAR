import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlantasModule } from './plantas/plantas.module';
import { PlantasService } from './plantas/plantas.service';
import { PlantasComponent } from './plantas/plantas.component';
import { HeaderComponent } from './layout/header/header.component';
import { HeaderModule } from './layout/header/header.module';
import { FooterComponent } from './layout/footer/footer.component';
import { FooterModule } from './layout/footer/footer.module';

@NgModule({
  declarations: [
    AppComponent,
    PlantasComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    PlantasModule,
    HeaderModule,
    FooterModule
  ],
  exports: [PlantasComponent, HeaderComponent, FooterComponent],
  providers: [PlantasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
