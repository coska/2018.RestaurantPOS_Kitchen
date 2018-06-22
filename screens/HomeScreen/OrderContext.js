import React, { Component, createContext } from 'react'

const Context = createContext()

class OrderProvider extends Component {
  /* eslint-disable */
  state = {
    orders: [
      {
        "orderId": "d290f1ee-6c54-4b01-90e6-d701748f0851",
        "orderedBy": {
          "userId": "dina",
          "userName": "Dina"
        },
        "createdDateTime": "2017-07-21T17:32:28.000Z",
        "table": {
          "tableId": 1,
          "name": "#1",
          "seats": 6,
          "isTakeOut": false,
          "occupied": true
        },
        "orderItems": [
          {
            "quantity": 0,
            "product": {
              "productId": "prd01",
              "name": "string",
              "price": 1.100000023841858,
              "imageFile": "string",
              "category": {
                "categoryId": 1,
                "name": "beverages"
              }
            }
          }
        ]
      }
    ]
  }
  /* eslint-enable */

  componentDidMount() {
    // fetch('https://virtserver.swaggerhub.com/coska/RestaurantPosV1/1.0.0/orders', { headers: { accept: 'application/json' } })
    //   .then(res => res.json())
    //   .then(orders => console.log(orders))
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {
          this.props.children // eslint-disable-line
        }
      </Context.Provider>
    )
  }
}

export {
  OrderProvider,
  Context,
}
