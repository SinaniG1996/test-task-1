import { Context } from "koa";
import Router from "koa-router";
import net from 'net'
import IPController from "./controller";

const ipController = new IPController()

async function ipLookup (ctx: Context) {  
  if (!net.isIP(ctx.params.ip)) throw new Error('IP Param should be specified and it should be valid IP')

  ctx.body = await ipController.ipLookup(ctx.params.ip)
}

async function dropIPInfoCache (ctx: Context) {
  if (!net.isIP(ctx.params.ip)) throw new Error('IP Param should be specified and it should be valid IP')

  ctx.body = await ipController.dropIPInfoCache(ctx.params.ip)
}

export default new Router({ prefix: '/ip' })
  .get('/:ip', ipLookup)
  .delete('/:ip/cache', dropIPInfoCache)