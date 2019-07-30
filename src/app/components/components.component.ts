import {
  Component,
} from '@angular/core';
import { VERSION as MAT_VERSION } from '@angular/material';
import {
  NavigationEnd,
  Router,
} from '@angular/router';
import { VERSION as NGX_VERSION } from '@terminus/ngx-tools';
import { VERSION as UI_VERSION } from '@terminus/ui';

import { orderArrayByProperty } from './../utilities/orderArrayByProperty';
import { componentsList } from './components.constant';


@Component({
  selector: 'forge-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.scss'],
})
export class ComponentsComponent implements OnInit {
  public components = orderArrayByProperty(componentsList, 'path');
  public title = `Components (${this.components.length})`;
  public height = '100px';
  public path = '';
  public activeNavItem!: {[key: string]: any};
  public uiVersion = UI_VERSION;
  public ngxVersion = NGX_VERSION;
  public ngVersion = NG_VERSION;
  public matVersion = MAT_VERSION;


  constructor(
    private router: Router,
  ) {}


  public ngOnInit() {
    this.setCurrentPage();

    // Update the navigation menu
    this.router.events
      .subscribe((event) => {
        if (event instanceof NavigationEnd) {
          this.setCurrentPage();
        }
      });
  }


  /**
   * Set the menu to the current page
   */
  public setCurrentPage(): void {
    const routeParts = this.router.routerState.snapshot.url.split('/');
    if (routeParts.length > 2) {
      this.path = routeParts[routeParts.length - 1];
    }

    this.findActiveComponent();
  }

  public findActiveComponent() {
    this.activeNavItem = this.components.filter((v: any) => {
      return v.path === this.path;
    })[0];
  }

}
