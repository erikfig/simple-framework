import { RoutesRegistry } from '../registry/routes-registry'

export const Route = (method, path) => {
  return function (target) {
    RoutesRegistry.add({
      method,
      path,
      handle: target,
    })
  }
}