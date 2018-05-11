import React from 'react'
import { mount } from 'enzyme'
import { Provider } from 'react-redux'

import { configureStore } from '../../../redux/store'
import { App } from '../app'

it('renders without crashing', () => {
  const store = configureStore()
  const wrapper = mount(
    <Provider store={store}>
      <App />
    </Provider>
  )
  wrapper.unmount()
})
