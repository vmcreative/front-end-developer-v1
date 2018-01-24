import { head } from 'ramda'

import reducer from './'
import { externalDataLoaded, externalDataLoadFailed } from '../actions'
import { EXTERNAL_DATA_LOAD_FAILED, EXTERNAL_DATA_LOADED } from '../constants'

const initialState = {
  externalData: [
    { name: 'initName', code: 'initCode', dialCode: 'initDialCode' }
  ],
  externalDataLoadError: 'initExternalDataLoadError'
}

describe('state', function () {
  describe('reducer', function () {
    it(`updates state for actions of type ${EXTERNAL_DATA_LOADED} properly`, function () {
      const externalData = { name: 'name', code: 'code', dialCode: 'dialCode' }
      const newState = reducer(initialState, externalDataLoaded([externalData]))
      const updatedExternalData = head(newState.externalData)

      expect(updatedExternalData.name).toBe(externalData.name)
      expect(updatedExternalData.code).toBe(externalData.code)
      expect(updatedExternalData.dialCode).toBe(externalData.dialCode)
    })

    it(`updates state for actions of type ${EXTERNAL_DATA_LOAD_FAILED} properly`, function () {
      const externalDataLoadError = 'externalDataLoadError'
      const newState = reducer(
        initialState,
        externalDataLoadFailed(externalDataLoadError)
      )
      const updatedExternalData = newState.externalDataLoadError

      expect(updatedExternalData).toBe(externalDataLoadError)
    })

    it(`returns state unchanged for unknown types`, function () {
      const newState = reducer(initialState, { type: 'UNKNOWN' })

      expect(newState).toEqual(initialState)
    })

    it(`works when no initial state provided`, function () {
      const newState = reducer(undefined, { type: 'UNKNOWN' })

      expect(newState).toEqual({})
    })
  })
})
