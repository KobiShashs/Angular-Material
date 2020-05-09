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
import { MenuComponent } from './components/menu/menu.component';
import { ListComponent } from './components/list/list.component';
import { GridlistComponent } from './components/gridlist/gridlist.component';
import { ExpansionpanelComponent } from './components/expansionpanel/expansionpanel.component';
import { CardsComponent } from './components/cards/cards.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StepperComponent } from './components/stepper/stepper.component';
import { InputComponent } from './components/input/input.component';
import { SelectComponent } from './components/select/select.component';
import { AutocompleteComponent } from './components/autocomplete/autocomplete.component';
import { AutocompletefilterComponent } from './components/autocompletefilter/autocompletefilter.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { RadioComponent } from './components/radio/radio.component';
import { DatepickerComponent } from './components/datepicker/datepicker.component';
import { TooltipComponent } from './components/tooltip/tooltip.component';
import { SnackbarComponent, CustomSnackBarComponent } from './components/snackbar/snackbar.component';
import { DialogsComponent } from './components/dialogs/dialogs.component';
import { DialogExampleComponent } from './components/dialog-example/dialog-example.component';
import { DatatableComponent } from './components/datatable/datatable.component';
import { ScrollingComponent } from './components/scrolling/scrolling.component';
import {ScrollingModule } from '@angular/cdk/scrolling';
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
    SidenavComponent,
    MenuComponent,
    ListComponent,
    GridlistComponent,
    ExpansionpanelComponent,
    CardsComponent,
    TabsComponent,
    StepperComponent,
    InputComponent,
    SelectComponent,
    AutocompleteComponent,
    AutocompletefilterComponent,
    CheckboxComponent,
    RadioComponent,
    DatepickerComponent,
    TooltipComponent,
    SnackbarComponent,
    CustomSnackBarComponent,
    DialogsComponent,
    DialogExampleComponent,
    DatatableComponent,
    ScrollingComponent
  ],
  entryComponents: [CustomSnackBarComponent, DialogExampleComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    ScrollingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
