import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ScreenService {
  constructor() {}

  getScreenWidth(): number {
    // Get the screen width using the window object
    const screenWidth =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;
    return screenWidth;
  }
}
