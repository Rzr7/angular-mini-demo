import { Injectable } from '@angular/core';
import { IContent } from "./content-page/content";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor(
    private http: HttpClient
  ) { }

  loadContent(contentFile : string) {
    return this.http.get<IContent>('/assets/' + contentFile + '.json');
  }
}
