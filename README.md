# E-commerce API

## Setup

```bash
npm install
```

Create a `.env` file and add the required environment variables.

## Run

```bash
npm run dev
```

## Endpoints

### Products

* GET `/api/products`
* GET `/api/products/:id`
* POST `/api/products`
* PUT `/api/products/:id`
* PATCH `/api/products/:id/deactivate`

### Categories

* GET `/api/categories`
* GET `/api/categories/:id`
* POST `/api/categories`
* PUT `/api/categories/:id`

### Users

* GET `/api/users`
* GET `/api/users/:id`
* POST `/api/users`
* PATCH `/api/users/:id/status`
