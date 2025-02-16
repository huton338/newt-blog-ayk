import type { Content, Media } from 'newt-client-js'
import type { Author } from '@/types/author'
import type { Tag } from '@/types/tag'

export interface Article extends Content {
  title: string
  slug: string
  meta?: {
    title?: string
    description?: string
    ogImage?: Media
  }
  body: BodyContent[]
  coverImage: Media
  author: Author
  tags?: Tag[]
}

export interface RichText {
  _id: string
  type: 'RICH_TEXT'
  data: string
}

export interface ArticleImage {
  _id: string
  type: 'IMAGE'
  data: Media
}

export interface Embed {
  _id: string
  type: 'EMBED'
  data: {
    html: string
    url: string
  }
}

export type BodyContent = RichText | ArticleImage | Embed

export interface Archive {
  year: number
  count: number
}
