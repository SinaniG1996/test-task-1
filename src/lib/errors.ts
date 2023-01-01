export class ValidationError extends Error {
  status?: number = undefined
  constructor (msg: string) {
    super(msg)
    this.status = 400
  }
}