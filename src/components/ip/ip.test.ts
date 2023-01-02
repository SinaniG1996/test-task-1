import { dropIPInfoCache, ipLookup } from './rest'
import { ValidationError } from '../../lib/errors'
import { Context } from 'koa'

describe('ip lookup', () => {
  it('Should throw error', async () => {
    await expect(ipLookup({} as Context)).rejects.toThrow(new ValidationError('IP Param should be valid IP'))
  })

  it('Drop IP cache and lookup', async () => {
    const ctx = { params: { ip: '8.8.8.8' } } as unknown as Context
    await dropIPInfoCache(ctx)
    await ipLookup(ctx)
    expect(ctx.body).toHaveProperty('ip')
  })
})

describe('drop ip cache', () => {
  it('Should throw error', async () => {
    await expect(dropIPInfoCache({} as Context)).rejects.toThrow(new ValidationError('IP Param should be valid IP'))
  })

  it('Drop IP cache', async () => {
    const ctx = { params: { ip: '8.8.8.8' } } as unknown as Context
    await dropIPInfoCache(ctx)
    expect(ctx.body).toBe(true)
  })
})