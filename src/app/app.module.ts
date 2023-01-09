import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';
import { NotificationComponent } from './notification/notification.component';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
import { ProductsComponent } from './products/products.component';
import { FilterComponent } from './filter/filter.component';
import { DateOfBirthComponent } from './date-of-birth/date-of-birth.component';
import { NavItemComponent } from './nav-item/nav-item.component';
import { DisplayTextComponent } from './display-text/display-text.component';
import { SetBackgroundDirective } from './custom-directive/setBackground.directive';
import { HighlightDirective } from './custom-directive/highlight.directive';
import { HoverDirective } from './custom-directive/hover.directive';
import { BetterHighlightDirective } from './custom-directive/better-highlight.directive';
import { ClassDirective } from './custom-directive/class.directive';
import { StyleDirective } from './custom-directive/style.directive';
import { IfDirective } from './custom-directive/if.directive';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    NavComponent,
    HeaderComponent,
    NotificationComponent,
    SearchComponent,
    ProductsComponent,
    FilterComponent,
    DateOfBirthComponent,
    NavItemComponent,
    DisplayTextComponent,
    SetBackgroundDirective,
    HighlightDirective,
    HoverDirective,
    BetterHighlightDirective,
    ClassDirective,
    StyleDirective,
    IfDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
