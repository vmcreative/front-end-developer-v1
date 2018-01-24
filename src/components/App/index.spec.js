import React from 'react'
import { shallow } from 'enzyme'

import App from './'
import { CountryCodeTable } from '../../containers'

describe('components', function () {
  describe('App', function () {
    it('renders a CountryCodeTable', function () {
      expect(shallow(<App />).find(CountryCodeTable)).toBePresent()
    })
  })
})
