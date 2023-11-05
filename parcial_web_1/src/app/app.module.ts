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

@NgModule({
  declarations: [
    AppComponent,
    PlantasComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    PlantasModule,
    HeaderModule
  ],
  exports:[PlantasComponent,HeaderComponent],
  providers: [PlantasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
