export interface Question {
  questionId: string
  questionFrontendId: string
  title: string
  translatedTitle: string
  titleSlug: string
  isPaidOnly: boolean
  difficulty: string
  likes: number
  dislikes: number
  categoryTitle: string
}
