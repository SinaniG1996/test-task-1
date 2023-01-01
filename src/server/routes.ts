import Router from "koa-router"

const router = new Router()

export default router
  .get('/ping', ctx => { ctx.body = 'pong' })
