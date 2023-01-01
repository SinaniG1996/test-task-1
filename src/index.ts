import 'colors.ts';
import dotenv from 'dotenv';
dotenv.config();

import server from './server';

server.listen({ port: process.env.PORT }, async () => {
  const bootTime = new Date()
  const timeString = `${bootTime.getHours()}:${bootTime.getMinutes()}:${bootTime.getSeconds()}:${bootTime.getMilliseconds()}`
  const pidString = `pid: ${process.pid}`

  console.clear()
  console.log(`\nServer ready at ${`http://localhost:${process.env.PORT}`.cyan}    ${timeString}    ${pidString}`)
  console.log('======================================='.blue + '================'.yellow + '=============\n'.red)
})
