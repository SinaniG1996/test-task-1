import Koa from 'koa'
import bodyParser from 'koa-bodyparser'
import koaHelmet from 'koa-helmet'
import koaCors from 'koa-cors'
import routes from './routes'

const app = new Koa()

export default app
  .use(koaCors({ credentials: true }))
  .use(koaHelmet())
  .use(bodyParser())
  .use(routes.routes())
  .use(routes.allowedMethods())
