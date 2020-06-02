import express from 'express'
import bodyParser from 'body-parser'
import http from 'http'
import routes from './routes'

const app = express()
app.use(bodyParser.json({ limit: '5mb' }))
app.use('/', routes())

const port = process.env.PORT || 4000;
const httpServer = http.createServer(app)
httpServer.listen({ port }, async () => {
    console.log(`Server started on PORT ${port}`)
})

  