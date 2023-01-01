import 'colors.ts';
import dotenv from 'dotenv';
dotenv.config();

import server from './server';
import { client } from './services/mongodb';

server
.listen({ port: process.env.PORT }, async () => {
  const bootTime = new Date()
  const timeString = `${bootTime.getHours()}:${bootTime.getMinutes()}:${bootTime.getSeconds()}:${bootTime.getMilliseconds()}`
  const pidString = `pid: ${process.pid}`

  console.clear()
  console.log(`\nServer ready at ${`http://localhost:${process.env.PORT}`.cyan}    ${timeString}    ${pidString}`)
  console.log('======================================='.blue + '================'.yellow + '=============\n'.red)
})
.on('error', err => {
  client.close()
    .then(() => {throw err})
});