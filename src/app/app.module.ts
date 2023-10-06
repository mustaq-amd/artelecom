import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { TabMenuModule } from 'primeng/tabmenu';
import { MenuModule } from 'primeng/menu';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { ButtonModule } from 'primeng/button';
import { PasswordModule } from 'primeng/password';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { UserComponent } from './components/user/user.component';
import { LoginByEmailComponent } from './components/user/login-by-email/login-by-email.component';
import { RegisterComponent } from './components/user/register/register.component';
import { MobileComponent } from './components/mobile/mobile.component';
import { WatchComponent } from './components/watch/watch.component';
import { SearchComponent } from './components/search/search.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { CartComponent } from './components/cart/cart.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserComponent,
    LoginByEmailComponent,
    RegisterComponent,
    MobileComponent,
    WatchComponent,
    SearchComponent,
    WishlistComponent,
    CartComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CheckboxModule,
    FormsModule,
    TabMenuModule,
    MenuModule,
    InputTextModule,
    ReactiveFormsModule,
    CalendarModule,
    ButtonModule,
    PasswordModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
