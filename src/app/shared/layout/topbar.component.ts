import { Component, OnInit } from '@angular/core';

import { User, UserService } from '../../core';

@Component({
  selector: 'layout-topbar',
  templateUrl: './topbar.component.html'
})
export class TopbarComponent implements OnInit {
  constructor(
    private userService: UserService
  ) {}

  navToggle = () => {
    document.getElementById('body').classList.toggle('ms-aside-left-open');
    document.getElementById('ms-side-nav').classList.toggle('ms-aside-open');
    document.getElementById('overlayleft').classList.toggle('d-block');
  }
  activityToggle = () => {
    document.getElementById('ms-recent-activity').classList.toggle('ms-aside-open');
    document.getElementById('overlayright').classList.toggle('d-block');
  }
  optionsToggle = () => {
    document.getElementById('ms-nav-options').classList.toggle('ms-slide-down');
  }

  currentUser: User;

  ngOnInit() {
    this.userService.currentUser.subscribe(
      (userData) => {
        this.currentUser = userData;
      }
    );
  }
}
