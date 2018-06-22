import React, { Component, createContext } from 'react'

const Context = createContext()

class OrderProvider extends Component {
  state = {
    orders: [], // eslint-disable-line
  }

  componentDidMount() {
    // fetch('https://virtserver.swaggerhub.com/coska/RestaurantPosV1/1.0.0/orders', { headers: { accept: 'application/json' } })
    //   .then(res => res.json())
    //   .then(orders => console.log(orders))
    /* eslint-disable */
    this.setState({
      orders: [
        {
          orderNo: 1,
        }, 
        {
          orderNo: 2,
        }, 
        {
          orderNo: 3,
        }, 
      ],
    })
    /* eslint-enable */
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
