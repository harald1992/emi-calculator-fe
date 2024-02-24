import { Component } from '@angular/core';
import { ERROR_MESSAGES } from '../../constants/error-messages';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.page.html',
  styleUrls: ['./not-found.page.scss']
})
export class NotFoundPage {
  content = ERROR_MESSAGES.NOT_FOUND;
}
