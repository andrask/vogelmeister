/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type Language = 'en' | 'fr' | 'it' | 'es' | 'pt' | 'nl' | 'sv' | 'da' | 'pl' | 'cs' | 'hu';

export interface Bird {
  id: string;
  germanName: string;
  names: Record<Language, string>;
  description: string;
  imageUrls: string[];
  vogelwarteUrl?: string;
  imageUrl?: string;
}

export type AppState = 'Selection' | 'Study' | 'Quiz' | 'LanguageSelection' | 'Stats';

export interface QuizQuestion {
  bird: Bird;
  options: string[];
  correctAnswer: string;
}
