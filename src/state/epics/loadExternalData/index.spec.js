import deepFreeze from 'deepfreeze'
import configureMockStore from 'redux-mock-store'
import { createEpicMiddleware } from 'redux-observable'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/observable/of'
import 'rxjs/add/observable/throw'

import loadExternalDataEpic from './'
import {
  appInitialised,
  externalDataLoaded,
  externalDataLoadFailed
} from '../../actions'
import {
  EXTERNAL_DATA_LOAD_FAILED,
  EXTERNAL_DATA_LOADED
} from '../../constants'

const initialState = deepFreeze({})

describe('state', function () {
  describe('epics', function () {
    describe('loadExternalData', function () {
      it(`returns action of type ${EXTERNAL_DATA_LOADED} on ajax success`, function () {
        const externalData = [
          { name: 'initName', code: 'initCode', dialCode: 'initDialCode' }
        ]
        const ajax = jest.fn()

        ajax.mockReturnValue(Observable.of({ response: { externalData } }))

        const epicMiddleware = createEpicMiddleware(loadExternalDataEpic, {
          dependencies: { ajax }
        })
        const store = configureMockStore([epicMiddleware])(initialState)
        const action = appInitialised()

        store.dispatch(action)

        const actions = store.getActions()

        expect(ajax).toHaveBeenCalled()
        expect(actions).toMatchObject([
          action,
          externalDataLoaded(externalData)
        ])
      })

      it(`returns action of type ${EXTERNAL_DATA_LOAD_FAILED} on ajax failure`, function () {
        const errorMessage = 'errorMessage'
        const ajax = jest.fn()

        ajax.mockReturnValue(Observable.throw(new Error(errorMessage)))

        const epicMiddleware = createEpicMiddleware(loadExternalDataEpic, {
          dependencies: { ajax }
        })
        const store = configureMockStore([epicMiddleware])(initialState)
        const action = appInitialised()

        store.dispatch(action)

        const actions = store.getActions()

        expect(ajax).toHaveBeenCalled()
        expect(actions).toMatchObject([
          action,
          externalDataLoadFailed(new Error(errorMessage))
        ])
      })
    })
  })
})
