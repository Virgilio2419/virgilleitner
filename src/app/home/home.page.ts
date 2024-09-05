import { Component,OnInit } from '@angular/core';
import { QuizService } from '../quiz.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  userName: string = '';
  questionsCount: any;

  constructor(private quizService: QuizService) {}

  ngOnInit() {
    this.updateQuestionsCount();
    this.userName = localStorage.getItem('userName') || 'Usuario'; // 
  }

  updateQuestionsCount() {
    this.questionsCount = this.quizService.getQuestionsCountByLevel();
  }

  getSummary() {
    return `Total de preguntas: ${this.questionsCount.level1 + this.questionsCount.level2 + this.questionsCount.level3}`;
  }

  startQuiz() {
    this.quizService.resetQuestionsLevel(); // Reinicia los niveles de las preguntas
    this.updateQuestionsCount(); // Actualiza el conteo después de reiniciar
  }
}