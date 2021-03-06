import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../navigation.service';
import {Observable} from "rxjs";
import {INavigation} from "./navigation";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  navItems!: Observable<INavigation[]>;

  constructor(
    private navigationService: NavigationService
  ) { }

  ngOnInit(): void {
    this.navItems = this.navigationService.getNavItems();
  }

}
