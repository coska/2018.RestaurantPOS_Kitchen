import * as AT from '../ActionTypes'
import * as _ from 'lodash'

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

const createTestData = () => {
  return ({
    type: AT.SET_ORDERS,
    orders: _.keys(new Array(30)).map(x => createOrder(x))
  })
}

const setOrderStatus = (id, status) => ({
  type: AT.SET_ORDER_STATUS,
  id,
  status,
})

export {
  createTestData,
  setOrderStatus,
}
