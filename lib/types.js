'use strict'

const connectDb = require('./db')
const { ObjectID } = require('mongodb')

module.exports = {
  Brand: {
    products: async ({ products }) => {
      let db
      let productData
      let ids

      try {
        db = await connectDb()
        ids = products ? products.map(id => ObjectID(id)) : []
        productData =
          ids.length > 0
            ? await db
                .collection('products')
                .find({ _id: { $in: ids } })
                .toArray()
            : []
      } catch (error) {
        console.log(error)
      }
      return productData
    }
  },
  User: {
    quantities: async ({ quantities }) => {
      let db
      let productData
      let ids
      let quantityData

      try {
        db = await connectDb()
        ids = quantities
          ? quantities.map(element => ObjectID(element.product))
          : []
        productData =
          ids.length > 0
            ? await db
                .collection('products')
                .find({ _id: { $in: ids } })
                .toArray()
            : []
        quantities.map(e => {
          const nuevo = productData.filter(a => {
            return e.product.toString() === a._id.toString()
          })[0]
          console.log(nuevo)
          return (e.product = nuevo)
        })
      } catch (error) {
        console.log(error)
      }
      //  console.log('quantity:', productData)
      return quantities
    }
  },

  GlobalSearch: {
    __resolveType: (item, context, info) => {
      if (item.price) {
        return 'Product'
      }
      return 'Brand'
    }
  }
}
