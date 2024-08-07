type Route = {
  method: string,
  path: string
  handle: (prop?: unknown) => unknown
}

export class RoutesRegistry {
  static routes: Route[] = []

  public static add(route: Route) {
    RoutesRegistry.routes.push(route)
  }

  public static handler(path: string, method: string) {
    const pathReplaced = path.replace(/^\/+|\/+$/g, '')

    const route = RoutesRegistry.routes
      .map((route) => {
        const routePathReplaced = route.path.replace(/^\/+|\/+$/g, '')

        const regex = routePathReplaced.replace(/({[a-z]+})/g, '([a-zA-Z0-9]+)')
        const matchResult = pathReplaced.match(`^${regex}$`)
        const match = route.method === method && matchResult

        const params = {}

        if (match) {
          const fields = routePathReplaced.match(/({[a-z]+})/g)?.map((field) => field.replace(/^\{+|\}+$/g, ''))

          fields?.forEach((field, key) => {
            params[field] = matchResult?.[key + 1]
          })
        }

        return {
          match,
          route,
          params,
        }
      })
      .filter((route) => route.match)?.[0]

    if (!route) {
      throw Error('404')
    }

    return route
  }
}
