import { createServer } from 'http'
import { decode } from 'querystring'
import './controllers'
import { RoutesRegistry } from './registry/routes-registry'

const PORT = 3000

const handler = async (req, res) => {
  try {
    const url = req.url.split('?')
    const query = decode(url[1])
    const { route, params } = RoutesRegistry.handler(url[0], req.method)
    let body

    for await (const data of req) {
      body = JSON.parse(data)
    }

    const response = await route.handle({ req, res, params, body, query })

    return (
      res.end(typeof response === 'string' ? response : JSON.stringify(response))
    )
  } catch (error) {
    if (error.message === '404') {
      res.statusCode = 404
      res.statusMessage = 'Not found'
      return res.end('Not found')
    }
    res.statusCode = 500
    res.statusMessage = 'Internal Server Error'
    return res.end(error.message)
  }
}

createServer(handler)
  .listen(PORT, () => console.log(`Project running at ${3000}`))
