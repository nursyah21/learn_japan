import { Elysia } from 'elysia'
const port = process.env.PORT || 3000

new Elysia()
    .get('/', () => 'Welcome to Bun!')
    .get('/json', () => ({
        hello: 'world'
    }))
    .listen(port)