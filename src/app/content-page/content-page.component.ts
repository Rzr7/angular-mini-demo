import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ContentService} from "../content.service";
import {Observable} from "rxjs";
import {IContent} from "./content";

@Component({
  selector: 'app-content-page',
  templateUrl: './content-page.component.html',
  styleUrls: ['./content-page.component.css']
})
export class ContentPageComponent implements OnInit {

  content$!: Observable<IContent>;

  constructor(
    private route: ActivatedRoute,
    private contentService: ContentService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const contentIdFromRoute = params['contentId'];
      this.content$ = this.contentService.loadContent(contentIdFromRoute);
    })
  }

}
