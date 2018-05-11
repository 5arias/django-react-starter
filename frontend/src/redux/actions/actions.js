import { makeAction } from './makeAction'

export const types = {
  SAMPLE: 'SAMPLE'
}

export const sampleAction = makeAction(types.SAMPLE, 'value')
