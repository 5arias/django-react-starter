import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import { Home } from '../home'

const setup = propOverrides => {
  const props = Object.assign(
    {
      content: 'this is the home content',
      updateContent: jest.fn()
    },
    propOverrides
  )

  const wrapper = shallow(<Home {...props} />)

  return {
    props,
    wrapper
  }
}

describe('Home', () => {
  it('calls updateContent when mounted', () => {
    const { props, wrapper } = setup()
    expect(props.updateContent).toHaveBeenCalled()
  })

  it('renders and matches the snapshot', () => {
    const { wrapper } = setup()
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
