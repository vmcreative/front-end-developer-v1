import { getExternalData } from './'

describe('state', function () {
  describe('selectors', function () {
    describe('getExternalData', function () {
      it(`returns the externalData from the state`, function () {
        const externalData = 'externalData'

        expect(getExternalData({ externalData })).toBe(externalData)
      })
    })
  })
})
