import React, { Component, createContext } from 'react'
import produce from 'immer'

const Context = createContext()

const createOrder = index => (
  {
    orderId: `${index}-6c54-4b01-90e6-d701748f0851`, // 'd290f1ee-6c54-4b01-90e6-d701748f0851',
    orderedBy: {
      userId: 'dina',
      userName: 'Dina',
    },
    createdDateTime: (new Date()).toJSON(), // '2017-07-21T17:32:28.000Z',
    table: {
      tableId: 1,
      name: '#1',
      seats: 6,
      isTakeOut: false,
      occupied: true,
    },
    orderItems: [
      {
        quantity: 0,
        product: {
          productId: 'prd01',
          name: 'string',
          price: 1.100000023841858,
          imageFile: 'string',
          category: {
            categoryId: 1,
            name: 'beverages',
          },
        },
      },
    ],
    status: 'new',
  }
)

class OrderProvider extends Component {
  /* eslint-disable */
  state = {
    orders: [],
    setStatus: (id, status) => this.setState(produce(draft => {
      const order = draft.orders[draft.orders.findIndex(order => order.orderId === id)]
      order.status = status
    }))
  }
  /* eslint-enable */

  componentDidMount() {
    // fetch('https://virtserver.swaggerhub.com/coska/RestaurantPosV1/1.0.0/orders', { headers: { accept: 'application/json' } })
    //   .then(res => res.json())
    //   .then(orders => console.log(orders))

    const orders = [...Array(30).keys()].map(x => createOrder(x))
    this.setState({orders}) // eslint-disable-line
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
