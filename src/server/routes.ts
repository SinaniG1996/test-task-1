import Router from "koa-router"

const router = new Router()

import ipRouter from '../components/ip/rest'

export default router
  .get('/ping', ctx => { ctx.body = 'pong' })
  .use(ipRouter.routes())
