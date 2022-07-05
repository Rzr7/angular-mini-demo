import { Injectable } from '@angular/core';
import {INavigation} from "./navigation/navigation";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  constructor(
    private http: HttpClient
  ) { }

  getNavItems() {
    return this.http.get<INavigation[]>('/assets/menu.json');
  }
}
