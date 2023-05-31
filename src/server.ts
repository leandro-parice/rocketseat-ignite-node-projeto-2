import fastify from 'fastify'
import { knex } from './database'
import { randomUUID } from 'crypto'
import { env } from './env'

const app = fastify()

app.get('/hello', async () => {
  // const tables = await knex('sqlite_schema').select('*')
  // return tables

  // const transaction = await knex('transactions')
  //   .insert({
  //     id: randomUUID(),
  //     title: 'Transação',
  //     amount: 5000,
  //   })
  //   .returning('*')

  // return transaction

  const transaction = await knex('transactions').select('*').where({
    amount: 1000,
  })

  return transaction
})

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log('HTTP server running')
  })
