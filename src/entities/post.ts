export interface IPost {
  body: string
  id: number
  title: string
  userId: number
}

export class Post implements IPost {
  body: string
  id: number
  title: string
  userId: number

  constructor (body: string, id: number, title: string, userId: number) {
    this.id = id
    this.body = body
    this.title = title
    this.userId = userId
  }
}
