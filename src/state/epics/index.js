import { combineEpics } from 'redux-observable'

import loadExternalDataEpic from './loadExternalData'

const combinedEpics = combineEpics(loadExternalDataEpic)

export default combinedEpics
