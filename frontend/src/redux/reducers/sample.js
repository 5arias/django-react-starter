import { types } from '../actions'

export const sampleState = {
  sampleKey: null
}

export const sample = (state = sampleState, action) => {
  if (action.type == null) return state
  switch (action.type) {
    case types.SAMPLE:
      return {
        ...state,
        sampleKey: action.value
      }
    default:
      return state
  }
}
