import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuTitleComponent } from './components/menu-title/menu-title.component';
import { MainComponent } from './main/main.component';
import { MenuItensComponent } from './components/menu-itens/menu-itens.component';
import { FooterComponent } from './footer/footer.component';
import { MapsComponent } from './components/maps/maps.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuTitleComponent,
    MainComponent,
    MenuItensComponent,
    FooterComponent,
    MapsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
