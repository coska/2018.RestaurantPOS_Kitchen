import produce from 'immer'
import * as AT from '../ActionTypes'

const orders = (state = [], action) => {
  switch (action.type) {
    case AT.SET_ORDERS:
      return action.orders
    case AT.SET_ORDER_STATUS:
      return produce(state, (draft) => {
        const order = draft[draft.findIndex(o => o.orderId === action.id)]
        order.status = action.status
      })
    default:
      return state
  }
}

export default orders
