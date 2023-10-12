import { Component, OnInit } from '@angular/core';
import { ScreenService } from '../../services/screen.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  screenWidth: number;
  menuOpen = false;
  isLoggedIn: boolean = false;
  constructor(private screenService: ScreenService, private router: Router) {}
  ngOnInit() {
    this.screenWidth = this.screenService.getScreenWidth();
    console.log('screenWidth : ', this.screenWidth);
    this.isLoggedIn = true;
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  goToMobiles() {
    this.toggleMenu();
    this.router.navigate(['/mobiles']);
  }

  goToWatches() {
    this.toggleMenu();
    this.router.navigate(['/watch']);
  }

  goToRegistrationPage() {
    this.toggleMenu();
    this.router.navigate(['/signup']);
  }
}
