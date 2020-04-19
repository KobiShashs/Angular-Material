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
import { ButtonToggleComponent } from './components/button-toggle/button-toggle.component';
import { IconsComponent } from './components/icons/icons.component';
import { BadgesComponent } from './components/badges/badges.component';
import { ProgressspinnerComponent } from './components/progressspinner/progressspinner.component';
import { FormsModule } from '@angular/forms';
import { ProgressbarComponent } from './components/progressbar/progressbar.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
@NgModule({
  declarations: [
    AppComponent,
    ButtonsComponent,
    TypographyComponent,
    ButtonToggleComponent,
    IconsComponent,
    BadgesComponent,
    ProgressspinnerComponent,
    ProgressbarComponent,
    ToolbarComponent,
    SidenavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatIconModule,
    FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
