import { makeAction } from '../makeAction'
import { types } from '../actions'

describe('MakeAction', () => {
  it('should create an action with a type and no args', () => {
    const action = makeAction(types.SAMPLE)
    const result = action()

    // Check the resulting action obj has the correct properties
    expect(Object.keys(result)).toHaveLength(1)
    expect(result).toHaveProperty('type')

    // Check the values are correct for the obj properties
    expect(result.type).toBe(types.SAMPLE)
  })

  it('should create an action with a type and a single arg', () => {
    const action = makeAction(types.SAMPLE, 'value')
    const result = action('one')

    // Check the resulting action obj has the correct properties
    expect(Object.keys(result)).toHaveLength(2)
    expect(result).toHaveProperty('type')
    expect(result).toHaveProperty('value')

    // Check the values are correct for the obj properties
    expect(result.type).toBe(types.SAMPLE)
    expect(result.value).toBe('one')
  })

  it('should create an action with a type and multiple args', () => {
    const action = makeAction(types.SAMPLE, 'value', 'arg2')
    const result = action('one', 'two')

    // Check the resulting action obj has the correct properties
    expect(Object.keys(result)).toHaveLength(3)
    expect(result).toHaveProperty('type')
    expect(result).toHaveProperty('value')
    expect(result).toHaveProperty('arg2')

    // Check the values are correct for the obj properties
    expect(result.type).toBe(types.SAMPLE)
    expect(result.value).toBe('one')
    expect(result.arg2).toBe('two')
  })
})
