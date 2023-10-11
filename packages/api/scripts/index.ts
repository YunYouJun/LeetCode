import { queryQuestionByTitleSlug } from '../src/graphql'

async function main() {
  const result = await queryQuestionByTitleSlug('two-sum')
  // eslint-disable-next-line no-console
  console.log(result)
}

main()
