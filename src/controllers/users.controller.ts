import { Route } from '../decorators/Route'

export class UsersController {

  @Route('GET', 'users/{id}/{name}')
  public view({ params }) {
    return {
      id: params.id,
      name: params.name,
    }
  }

  @Route('POST', 'users')
  public async update({ body }) {

    return {
      success: true,
      message: 'User created',
      data: body,
    }
  }
}