import { Injectable } from '@angular/core';

interface Question {
  question: string;
  options: string[];
  correctAnswer: number;
  level: number;
}

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  private questions: Question[] = [
    // Preguntas de nivel 1
    {
      question: "¿Cuál es la capital de Francia?",
      options: ["Berlín", "Madrid", "París", "Lisboa"],
      correctAnswer: 2,
      level: 1
    },
    {
      question: "¿Qué es la capital de España?",
      options: ["Berlín", "Madrid", "París", "Lisboa"],
      correctAnswer: 1,
      level: 1
    },
    {
      question: "¿Qué es la capital de Alemania?",
      options: ["Berlín", "Madrid", "París", "Lisboa"],
      correctAnswer: 0,
      level: 1
    },
    // Preguntas de nivel 2
    {
      question: "¿Qué es el ADN?",
      options: ["Ácido Dextrose", "Ácido Desoxirribonucleico", "Ácido Dextrosol", "Ácido Dextrano"],
      correctAnswer: 1,
      level: 1
    },
    {
      question: "¿Qué es la fotosíntesis?",
      options: ["Proceso de respiración", "Proceso de producción de energía en plantas", "Proceso de reproducción", "Proceso de descomposición"],
      correctAnswer: 1,
      level: 1
    },
    // Preguntas de nivel 3
    {
      question: "¿Quién escribió 'Cien años de soledad'?",
      options: ["Gabriel García Márquez", "Mario Vargas Llosa", "Jorge Luis Borges", "Julio Cortázar"],
      correctAnswer: 0,
      level: 1
    },
    {
      question: "¿Qué es la teoría de la relatividad?",
      options: ["Teoría sobre la gravedad", "Teoría sobre el tiempo y el espacio", "Teoría sobre la evolución", "Teoría sobre la energía"],
      correctAnswer: 1,
      level: 1
    },
  ];

  private lastAccessDates: { [key: string]: string } = {
    'question1': '',
    'question2': '',
    'question3': ''
  };

  getQuestions(level: number) {
    return this.questions.filter(q => q.level === level);
  }
  
  getQuestionsCountByLevel() {
    const counts = { level1: 0, level2: 0, level3: 0 };
    this.questions.forEach(question => {
      if (question.level === 1) counts.level1++;
      if (question.level === 2) counts.level2++;
      if (question.level === 3) counts.level3++;
    });
    return counts;
  }

  moveQuestionToNextLevel(question: Question) {
    const index = this.questions.findIndex(q => q.question === question.question && q.level === question.level);
    if (index !== -1 && this.questions[index].level < 3) { // Asegúrate de que no supere el nivel 3
      this.questions[index].level++;
    }
  }

  moveQuestionToPreviousLevel(question: Question) {
    const index = this.questions.findIndex(q => q.question === question.question && q.level === question.level);
    if (index !== -1 && this.questions[index].level > 1) { // Asegúrate de que no baje del nivel 1
      this.questions[index].level--;
    }
  }

  resetQuestionsLevel() {
    this.questions.forEach(question => {
      question.level = 1; // Restablece el nivel a 1
    });
  }

  setLastAccessDate(page: string) {
    this.lastAccessDates[page] = new Date().toLocaleString();
  }

  getLastAccessDate(page: string): string {
    return this.lastAccessDates[page] || 'Nunca';
  }

}