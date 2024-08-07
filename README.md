# Simple Framework

Este é um projeto de estudos de implementação de um framework web que implementa:

- Node.js 20+
- Typescript
- Rotas
- Controllers com Decorator e response por string ou objetos
- Parse de query string, body e parâmetros de rota (rota dinâmica)

> Não use em produção, apenas implementei para ver na prática como seria um sistema de rotas em Node.js.

## Para começar

```
// para instalar as dependências
yarn

// para rodar ambiente de dev
yarn start:dev

// para rodar ambiente de produção
yarn build
yarn start:prod
```

## Teste

Para testar as rotas:

```
// POST
curl -i -X POST  localhost:3000/products

// Get e Query String
curl -i 'localhost:3000/products?name=Xbox'

// Get e Parâmetros de rota (rota dinâmica)
curl -i localhost:3000/users/1/erik

// Post com Body
curl -i -X POST 'localhost:3000/users' --data '{"name": "Erik"}'
```
