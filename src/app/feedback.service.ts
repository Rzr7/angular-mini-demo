import { Injectable } from '@angular/core';
import {IFeedback} from "./feedback/feedback";

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor() { }
  addNewFeedback(feedback: IFeedback) {
    console.log('Got feedback');
    alert('Feedback: ' + JSON.stringify(feedback));
  }
}
