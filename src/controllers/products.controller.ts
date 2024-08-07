import { Route } from '../decorators/Route'

export class ProductsController {

  @Route('GET', 'products')
  public index({ query }) {
    // throw Error
    return [
      {
        id: 1,
        title: query.name,
      }
    ]
  }

  @Route('POST', 'products')
  public create() {
    return {
      success: true,
      message: 'Product created',
    }
  }
}