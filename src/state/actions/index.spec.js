import {
  appInitialised,
  externalDataLoaded,
  externalDataLoadFailed
} from './'
import {
  APP_INITIALISED,
  EXTERNAL_DATA_LOAD_FAILED,
  EXTERNAL_DATA_LOADED
} from '../constants'

describe('state', function () {
  describe('actions', function () {
    describe('appInitialised', function () {
      it(`returns an ${APP_INITIALISED} action`, function () {
        expect(appInitialised()).toEqual({
          type: APP_INITIALISED
        })
      })
    })

    describe('externalDataLoaded', function () {
      it(`returns an ${EXTERNAL_DATA_LOADED} action with the correct payload`, function () {
        const externalData = 'externalData'
        expect(externalDataLoaded(externalData)).toEqual({
          type: EXTERNAL_DATA_LOADED,
          payload: {
            externalData
          }
        })
      })
    })

    describe('externalDataLoadFailed', function () {
      it(`returns an ${EXTERNAL_DATA_LOAD_FAILED} action`, function () {
        const externalDataLoadError = 'externalDataLoadError'
        expect(externalDataLoadFailed(externalDataLoadError)).toEqual({
          type: EXTERNAL_DATA_LOAD_FAILED,
          payload: {
            externalDataLoadError
          }
        })
      })
    })
  })
})
