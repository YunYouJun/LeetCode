export const languages = ['ts', 'js', 'py'] as const

export interface Problem {
  id: number | string
  index: string
  title: string
  difficulty: string
  language: string | typeof languages[number]
  category: string
}
