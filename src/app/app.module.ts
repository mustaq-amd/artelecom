import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { TabMenuModule } from 'primeng/tabmenu';
import { MenuModule } from 'primeng/menu';
import { UserInfoComponent } from './user-info/user-info.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, UserInfoComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CheckboxModule,
    FormsModule,
    TabMenuModule,
    MenuModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
