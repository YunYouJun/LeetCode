import { createClient } from 'graphql-http'

import type { Question } from './types'

export const client = createClient({
  url: 'https://leetcode.cn/graphql',
})

export async function queryQuestionByTitleSlug(titleSlug: string) {
  const query = /* GraphQL */`
    query questionTitle($titleSlug: String!) {
      question(titleSlug: $titleSlug) {
        questionId
        questionFrontendId
        title
        translatedTitle
        titleSlug
        isPaidOnly
        difficulty
        likes
        dislikes
        categoryTitle
      }
    }
  `

  const result: {
    data: {
      question: Question
    }
  } = await new Promise((resolve, reject) => {
    let res: any
    client.subscribe(
      {
        query,
        variables: {
          titleSlug,
        },
      },
      {
        next: data => (res = data),
        error: reject,
        complete: () => resolve(res),
      },
    )
  })

  return result.data
}
