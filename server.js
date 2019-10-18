'use strict'

require('dotenv').config()

const express = require('express')
const { readFileSync } = require('fs')
const { join } = require('path')
const cors = require('cors')
const { ApolloServer } = require('apollo-server-express')
const jwt = require('jsonwebtoken')
const resolvers = require('./lib/resolvers')
const cookieParser = require('cookie-parser')

// definiendo le esquema
const typeDefs = readFileSync(
  join(__dirname, 'lib', 'schema.graphql'),
  //
  'utf-8'
)

const server = new ApolloServer({
  cors: {
    origin: 'https://bucciarati.mauriciofow.now.sh/*',
    credentials: true
  },
  typeDefs,
  resolvers,
  context: ({ req }) => {
    // get the user token from the headers
    const data = {
      usuario: req.headers.usuario,
      password: req.headers.password
    }
    const token = jwt.sign(
      { sub: data.usuario, password: data.password },
      process.env.JWT_SECRET_TOKEN
    )

    let loggedIn = true
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET_TOKEN)
      const username = decoded.sub
      const password = decoded.password
      // optionally block the user
      // we could also check user roles/permissions here
      if (username === 'null') loggedIn = false

      // add the user to the context
      return { loggedIn, username, password }
    } catch (err) {
      loggedIn = false
      return { loggedIn }
    }
  }
})

const app = express()
var corsOptions = {
  origin: '*',
  credentials: true // <-- REQUIRED backend setting
}

app.use(cors(corsOptions))
app.use(cookieParser())
app.use((req, res, next) => {
  // checks for user in cookies and adds userId to the requests
  const { token } = req.cookies
  if (token) {
    const { userId } = jwt.verify(token, process.env.JWT_SECRET_TOKEN)
    req.userId = userId
  }
  next()
})

server.applyMiddleware({
  app,
  path: '/',
  cors: false // disables the apollo-server-express cors to allow the cors middleware use
})

app.listen({ port: process.env.PORT || 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
)
