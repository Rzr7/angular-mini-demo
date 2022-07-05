import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {IContent} from "../content-page/content";
import {ContentService} from "../content.service";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  content$!: Observable<IContent>;
  constructor(
    private contentService: ContentService
  ) { }

  ngOnInit(): void {
    this.content$ = this.contentService.loadContent('home');
  }

}
