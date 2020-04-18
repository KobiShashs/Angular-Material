import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { from } from 'rxjs';
import { MaterialModule } from './material/material.module';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { MatIconModule } from '@angular/material/icon';
import { TypographyComponent } from './components/typography/typography.component';
@NgModule({
  declarations: [
    AppComponent,
    ButtonsComponent,
    TypographyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatIconModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
