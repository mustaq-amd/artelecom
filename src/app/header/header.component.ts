import { Component, OnInit } from '@angular/core';
import { ScreenService } from '../services/screen.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  screenWidth: number;
  menuOpen = false;
  constructor(private screenService: ScreenService) {}
  ngOnInit() {
    this.screenWidth = this.screenService.getScreenWidth();
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }
}
