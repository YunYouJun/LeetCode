import path from 'node:path'

const __dirname = path.dirname(new URL(import.meta.url).pathname)
export const problemsFolder = path.resolve(__dirname, '../problems')
export const templatesFolder = path.resolve(__dirname, '../templates')
