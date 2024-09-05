import { Component,OnInit } from '@angular/core';
import { QuizService } from '../quiz.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question3',
  templateUrl: './question3.page.html',
  styleUrls: ['./question3.page.scss'],
})
export class Question3Page implements OnInit {
  userName: string = '';
  questions: any[] = [];
  currentQuestionIndex: number = 0;
  selectedAnswer: number | null = null;
  isAnswered: boolean = false;
  isCorrect: boolean | null = null;
  correctAnswers: number = 0;
  incorrectAnswers: number = 0;
  constructor(private quizService: QuizService, private router: Router) {
    this.loadQuestions();
  }
  
  ngOnInit() {
    this.userName = localStorage.getItem('userName') || 'Usuario'; // 
  }

  loadQuestions() {
    this.questions = this.quizService.getQuestions(3);
  }

  selectAnswer(index: number) {
    if (this.isAnswered) return; // Evita seleccionar otra respuesta si ya fue respondida

    this.selectedAnswer = index;
    this.isAnswered = true;
    this.isCorrect = this.selectedAnswer === this.questions[this.currentQuestionIndex].correctAnswer;

    if (this.isCorrect) {
      this.correctAnswers++;
      // Mueve la pregunta al siguiente nivel si la respuesta es correcta
      this.quizService.moveQuestionToNextLevel(this.questions[this.currentQuestionIndex]);
    }else {
      this.incorrectAnswers++;
      
     }
  }

  nextQuestion() {
    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
      this.selectedAnswer = null;
      this.isAnswered = false;
      this.isCorrect = null;
    } else {
      // Redirige a la página de resumen
      this.router.navigate(['/summary'], {
        queryParams: {
          correctAnswers: this.correctAnswers,
          totalQuestions: this.questions.length,
        },
      });
    }
  }
  getIncorrectPercentage() {
    return ((this.incorrectAnswers / this.questions.length) * 100).toFixed(2);
  }

  getCorrectPercentage() {
    return ((this.correctAnswers / this.questions.length) * 100).toFixed(2);
  }
}