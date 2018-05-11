import { sample, sampleState as state } from '../sample'
import { types } from '../../actions'

describe('Sample Reducer', () => {
  it('returns default state if an action type is not provided', () => {
    const nullAction = { type: null, value: 'this should not be set' }
    const newState = sample(state, nullAction)
    expect(newState).toMatchObject(state)
  })

  it('returns default state if an action type does match', () => {
    const fakeAction = { type: 'FAKE_ACTION', value: 'this should not be set' }
    const newState = sample(state, fakeAction)
    expect(newState).toMatchObject(state)
  })

  it('updates the sampleKey to a new value', () => {
    const action = { type: types.SAMPLE, value: 'this is a new value!' }
    const newState = sample(state, action)
    expect(newState.sampleKey).toBe(action.value)
  })
})
