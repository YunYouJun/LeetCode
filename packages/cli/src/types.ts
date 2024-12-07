import type { Question } from '@/api'

export const languages = ['ts', 'js', 'py'] as const

export interface Problem extends Partial<Question> {
  id: number | string
  index: string
  title: string
  difficulty: string
  language?: string | typeof languages[number]
  category?: string
}
