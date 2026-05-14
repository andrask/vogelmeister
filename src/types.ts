/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Bird {
  id: string;
  germanName: string;
  englishName: string;
  description: string;
  category: 'garden' | 'forest' | 'water' | 'predator';
  imageUrl: string;
}

export type AppState = 'Selection' | 'Study' | 'Quiz';

export interface QuizQuestion {
  bird: Bird;
  options: string[];
  correctAnswer: string;
}
