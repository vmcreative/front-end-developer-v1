import React from 'react'
import { shallow } from 'enzyme'
import { Table } from 'react-bootstrap'

import CountryCodeTable from './'

describe('containers', function () {
  describe('CountryCodeTable', function () {
    it('renders a loading message if external data is missing', function () {
      const initialiseApp = jest.fn()
      const wrapper = shallow(
        <CountryCodeTable initialiseApp={initialiseApp} externalData={null} />
      )

      expect(wrapper.find('p').text()).toEqual('Loading data')
      expect(initialiseApp).toHaveBeenCalled()
    })

    it('renders a table if external data is present', function () {
      const code = { name: 'name', code: 'code', dialCode: 'dialCode' }
      const initialiseApp = jest.fn()
      const wrapper = shallow(
        <CountryCodeTable
          initialiseApp={initialiseApp}
          externalData={[code]}
        />
      )
      const tds = wrapper.find(Table).find('td')

      expect(tds.at(0).text()).toBe(code.name)
      expect(tds.at(1).text()).toBe(code.code)
      expect(tds.at(2).text()).toBe(code.dialCode)
    })
  })
})
