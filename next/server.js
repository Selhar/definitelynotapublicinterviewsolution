const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
//@TODO: implement a proper server to deal with routing

app.prepare().then(() => {
  createServer((req, res) => {

    const parsedUrl = parse(req.url, true)
    const pathname = parsedUrl.pathname.split("/")

    if (pathname[1] === "messages") {
      console.log(pathname[0])
      app.render(req, res, '/channel', { channel: pathname[2]})
    } else {
      handle(req, res, parsedUrl)
    }
  }).listen(3000, err => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
