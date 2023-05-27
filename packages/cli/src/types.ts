export interface Problem {
  id: number | string
  index: string
  title: string
  difficulty: string
  language: string | 'ts' | 'js' | 'py'
  category: string
}
