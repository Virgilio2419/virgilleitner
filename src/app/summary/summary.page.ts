import { Component } from '@angular/core';
import { NavParams } from '@ionic/angular';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.page.html',
  styleUrls: ['./summary.page.scss'],
})
export class SummaryPage {
  correctAnswers: number;
  totalQuestions: number;

  constructor(private navParams: NavParams) {
    this.correctAnswers = this.navParams.get('correctAnswers');
    this.totalQuestions = this.navParams.get('totalQuestions');
  }
}