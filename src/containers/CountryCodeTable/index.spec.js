import React from 'react'
import { shallow } from 'enzyme'
import configureStore from 'redux-mock-store'

import CountryCodeTable from './'
import { appInitialised } from '../../state/actions'

const shallowWithStore = (component, store) => {
  const context = {
    store
  }
  return shallow(component, { context })
}

describe('components', function () {
  describe('CountryCodeTable', function () {
    it('connects CountryCodeTable to store correctly', function () {
      const externalData = [
        { name: 'name', code: 'code', dialCode: 'dialCode' }
      ]
      const store = configureStore()({ externalData })
      const wrapper = shallowWithStore(<CountryCodeTable />, store)

      expect(wrapper.prop('externalData')).toEqual(externalData)

      expect(wrapper.prop('initialiseApp')()).toEqual(appInitialised())
    })
  })
})
