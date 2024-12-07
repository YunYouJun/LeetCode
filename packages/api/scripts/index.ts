import { queryQuestionByTitleSlug } from '../src/graphql'

async function main() {
  const result = await queryQuestionByTitleSlug('two-sum')

  console.log(result)
}

main()
