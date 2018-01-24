const Koa = require('koa')
const cors = require('koa2-cors')
const app = new Koa()
const router = require('koa-better-router')()
const json = require('koa-json')

const externalData = require('./data/externalData')

app.use(json())
app.use(
  cors({
    origin: function () {
      return '*'
    },
    exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
    maxAge: 5,
    credentials: true,
    allowMethods: ['GET', 'POST', 'DELETE'],
    allowHeaders: ['Content-Type', 'Authorization', 'Accept']
  })
)

// locationsByAddress (store locations)
router.addRoute('GET /externalData', (ctx, next) => {
  ctx.body = externalData

  return next()
})

app.use(router.middleware())

app.listen(4001)
