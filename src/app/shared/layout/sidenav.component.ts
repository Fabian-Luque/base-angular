import { Component } from '@angular/core';
import navigation from '../../data/navigation.json';

@Component({
  selector: 'app-layout-sidenav',
  templateUrl: './sidenav.component.html'
})
export class SidenavComponent {
  today: number = Date.now();
  public navlist = navigation;
  navToggle = () => {
    document.getElementById('body').classList.toggle('ms-aside-left-open');
    document.getElementById('ms-side-nav').classList.toggle('ms-aside-open');
    document.getElementById('overlayleft').classList.toggle('d-block');
  }
}
