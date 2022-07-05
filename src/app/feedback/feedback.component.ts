import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import {FeedbackService} from "../feedback.service";
import {IFeedback} from "./feedback";

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  constructor(
    private feedbackService: FeedbackService,
  ) { }

  ngOnInit(): void {
  }

  name = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required, Validators.email]);
  content = new FormControl('', [Validators.required]);

  getErrorMessage(field: string) {
    switch (field) {
      case 'name':
        if (this.name.hasError('required')) {
          return 'You must enter a value';
        }
        break;
      case 'content':
        if (this.content.hasError('required')) {
          return 'You must enter a value';
        }
        break;
      case 'email':
        if (this.email.hasError('required')) {
          return 'You must enter a value';
        }
        if (this.email.hasError('email')) {
          return 'Not a valid email';
        }
        break;
    }

    return '';
  }

  onSubmit(): void {
    const feedbackData: IFeedback = {
      name: this.name.value,
      email: this.email.value,
      content: this.content.value
    }
    this.feedbackService.addNewFeedback(feedbackData);
  }

}
