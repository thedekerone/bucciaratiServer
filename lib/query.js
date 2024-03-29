'use strict'
const connectDb = require('./db')
const { ObjectID } = require('mongodb')

module.exports = {
  getProducts: async () => {
    let db
    let products = []
    try {
      db = await connectDb()
      products = await db
        .collection('products')
        .find()
        .toArray()
    } catch (err) {
      console.log(err)
    }
    return products
  },
  getUsers: async (parent, args, context) => {
    if (!context.loggedIn) return null
    let db
    let users = []
    let match = []

    try {
      db = await connectDb()

      users = await db
        .collection('user')
        .find()
        .toArray()
      match = users.filter(user => {
        return (
          user.username == context.username && user.password == context.password
        )
      })[0]
      if (match.length == 0) return null
    } catch (err) {
      console.log(err)
    }
    // console.log(match.quantities)
    return match
  },
  getProduct: async (root, { id }) => {
    let db, product
    try {
      db = await connectDb()
      product = await db.collection('products').findOne({ _id: ObjectID(id) })
      if (!product) throw new Error('could not find product')
    } catch (err) {
      console.log(err)
    }
    return product
  },
  getBrands: async () => {
    let db
    let products = []
    try {
      db = await connectDb()
      products = await db
        .collection('brand')
        .find()
        .toArray()
    } catch (err) {
      console.log(err)
    }
    return products
  },
  searchItems: async (root, { keyword }) => {
    let db
    let products
    let brands
    let items
    try {
      db = await connectDb()
      products = await db
        .collection('products')
        .find({
          $text: { $search: keyword }
        })
        .toArray()
      brands = await db
        .collection('brand')
        .find({
          $text: { $search: keyword }
        })
        .toArray()

      items = [...products, ...brands]
    } catch (error) {
      console.log(error)
    }
    return items
  },
  searchProducts: async (root, { filter }) => {
    let db

    let products = []
    try {
      db = await connectDb()
      products = await db
        .collection('products')
        .find({
          $text: { $search: filter }
        })
        .toArray()
    } catch (err) {
      console.log(err)
    }
    return products
  }
}
