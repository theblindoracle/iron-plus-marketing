
import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

const documentsDirectory = join(process.cwd(), 'documents')

export function getDocumentSlugs() {
  return fs.readdirSync(documentsDirectory)
}

export function getDocumentBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(documentsDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  type Items = {
    [key: string]: string
  }

  const items: Items = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug
    }
    if (field === 'content') {
      items[field] = content
    }

    if (typeof data[field] !== 'undefined') {
      items[field] = data[field]
    }
  })

  return items
}

export function getAllDocuments(fields: string[] = []) {
  const slugs = getDocumentSlugs()
  const documents = slugs
    .map((slug) => getDocumentBySlug(slug, fields))
  // sort documents by date in descending order
  return documents
}