import { applyMiddleware, compose } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import { ajax } from 'rxjs/observable/dom/ajax'

import combinedEpics from '../epics'

const epicMiddleware = createEpicMiddleware(combinedEpics, {
  dependencies: {
    ajax
  }
})

const baseMiddleware = applyMiddleware(epicMiddleware)
const isServer = typeof window === 'undefined'
const middleware =
  isServer || !window.devToolsExtension
    ? baseMiddleware
    : compose(baseMiddleware, window.devToolsExtension())

export default middleware
