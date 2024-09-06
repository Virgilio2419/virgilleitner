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
    // **Preguntas de Arquitectura y Modelos**

    {
      question: "¿Cuál es el propósito principal del arquitecto de software en el desarrollo de un sistema?",
      options: [
        "Definir los requisitos funcionales",
        "Diseñar la arquitectura del sistema",
        "Desarrollar el código fuente",
        "Realizar pruebas de integración"
      ],
      correctAnswer: 1, // "Diseñar la arquitectura del sistema"
      level: 1
    },
    {
      question: "¿Qué son los requisitos no funcionales?",
      options: [
        "Requisitos que especifican funciones específicas del sistema",
        "Requisitos que definen el rendimiento, escalabilidad y seguridad",
        "Requisitos que se centran en el diseño de la interfaz de usuario",
        "Requisitos que describen los datos de entrada y salida"
      ],
      correctAnswer: 1, // "Requisitos que definen el rendimiento, escalabilidad y seguridad"
      level: 1
    },
    {
      question: "¿Cuál de los siguientes modelos arquitectónicos se usa comúnmente para sistemas distribuidos?",
      options: [
        "Modelo cliente-servidor",
        "Modelo en capas",
        "Modelo de base de datos relacional",
        "Modelo de microservicios"
      ],
      correctAnswer: 0, // "Modelo cliente-servidor"
      level: 1
    },
    {
      question: "¿Qué es una vista arquitectónica en el contexto de la arquitectura de software?",
      options: [
        "Una lista de los requisitos funcionales del sistema",
        "Una representación visual del código fuente",
        "Una descripción de los casos de uso del sistema",
        "Una perspectiva específica del sistema que aborda un conjunto particular de preocupaciones"
      ],
      correctAnswer: 3, // "Una perspectiva específica del sistema que aborda un conjunto particular de preocupaciones"
      level: 1
    },
    {
      question: "¿Cómo se debe manejar un riesgo identificado en la arquitectura del sistema?",
      options: [
        "Eliminar la funcionalidad que podría causar el riesgo",
        "Esperar a que el problema ocurra y solucionarlo en el futuro",
        "Documentar el riesgo y proponer una solución o mitigación",
        "Ignorar el riesgo si no afecta directamente al rendimiento"
      ],
      correctAnswer: 2, // "Documentar el riesgo y proponer una solución o mitigación"
      level: 1
    },

    // **Preguntas sobre Patrones Arquitectónicos**

    {
      question: "¿Qué es un patrón arquitectónico en el desarrollo de software?",
      options: [
        "Una herramienta de desarrollo de software",
        "Un enfoque estándar para resolver un problema común de diseño",
        "Un tipo de diagrama de flujo",
        "Un lenguaje de programación específico"
      ],
      correctAnswer: 1, // "Un enfoque estándar para resolver un problema común de diseño"
      level: 1
    },
    {
      question: "¿Cuál es el patrón arquitectónico que utiliza la separación de responsabilidades en diferentes capas?",
      options: [
        "Patrón de Microservicios",
        "Patrón MVC (Modelo-Vista-Controlador)",
        "Patrón Cliente-Servidor",
        "Patrón de Repositorio"
      ],
      correctAnswer: 1, // "Patrón MVC (Modelo-Vista-Controlador)"
      level: 1
    },
    {
      question: "¿En qué patrón se basa el enfoque de desacoplar la lógica de negocio de la interfaz de usuario?",
      options: [
        "Patrón de Inyección de Dependencias",
        "Patrón de Observador",
        "Patrón de Arquitectura en Capas",
        "Patrón de Estrategia"
      ],
      correctAnswer: 2, // "Patrón de Arquitectura en Capas"
      level: 1
    },

    // **Preguntas sobre Evaluación y Documentación de Arquitectura**

    {
      question: "¿Qué aspecto de la arquitectura de software se evalúa al analizar los atributos de calidad?",
      options: [
        "La calidad del código fuente",
        "La interfaz de usuario y la experiencia del usuario",
        "El cumplimiento de los requisitos funcionales",
        "La capacidad del sistema para cumplir con criterios como rendimiento, seguridad y escalabilidad"
      ],
      correctAnswer: 3, // "La capacidad del sistema para cumplir con criterios como rendimiento, seguridad y escalabilidad"
      level: 1
    },
    {
      question: "¿Cuál es el propósito de realizar una matriz de riesgos en la arquitectura de software?",
      options: [
        "Documentar las funcionalidades del sistema",
        "Establecer los requisitos de rendimiento",
        "Definir los casos de prueba para el sistema",
        "Evaluar y priorizar los riesgos potenciales y sus impactos"
      ],
      correctAnswer: 3, // "Evaluar y priorizar los riesgos potenciales y sus impactos"
      level: 1
    },
    {
      question: "¿Qué debe incluir un buen documento de arquitectura de software?",
      options: [
        "Solo el código fuente del sistema",
        "Una descripción del modelo de datos y los casos de uso",
        "Una descripción detallada de los componentes, sus interacciones y la justificación de las decisiones arquitectónicas",
        "Un resumen de las pruebas realizadas"
      ],
      correctAnswer: 2, // "Una descripción detallada de los componentes, sus interacciones y la justificación de las decisiones arquitectónicas"
      level: 1
    },

    // **Preguntas Adicionales sobre Requisitos y Escenarios**

    {
      question: "¿Qué es un escenario de calidad en la arquitectura de software?",
      options: [
        "Un conjunto de pruebas unitarias",
        "Un escenario que describe cómo se deben manejar los atributos de calidad del sistema",
        "Una lista de los requisitos de usuario",
        "Un conjunto de diagramas de flujo"
      ],
      correctAnswer: 1, // "Un escenario que describe cómo se deben manejar los atributos de calidad del sistema"
      level: 1
    },
    {
      question: "¿Qué herramienta se usa comúnmente para modelar arquitecturas de software?",
      options: [
        "Microsoft Word",
        "Lucidchart",
        "Notepad",
        "Excel"
      ],
      correctAnswer: 1, // "Lucidchart"
      level: 1
    },
    {
      question: "¿Cuál es un factor clave al seleccionar un modelo arquitectónico para una solución de software?",
      options: [
        "El costo de las licencias de software",
        "La facilidad de implementación del modelo",
        "La experiencia previa del equipo de desarrollo con el modelo",
        "Los requisitos específicos del sistema, tanto funcionales como no funcionales"
      ],
      correctAnswer: 3, // "Los requisitos específicos del sistema, tanto funcionales como no funcionales"
      level: 1
    }
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