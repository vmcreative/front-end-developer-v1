import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/mergeMap'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import 'rxjs/add/observable/of'

import { externalDataLoaded, externalDataLoadFailed } from '../../actions'
import { APP_INITIALISED } from '../../constants'

const loadExternalDataEpic = function (action$, store, { ajax }) {
  return action$.ofType(APP_INITIALISED).mergeMap(() => {
    return ajax({
      url: 'http://localhost:4001/externalData',
      crossDomain: true,
      contentType: 'application/json; charset=utf-8',
      responseType: 'json'
    })
      .map(({ response }) => externalDataLoaded(response.externalData))
      .catch(externalDataLoadError => {
        return Observable.of(externalDataLoadFailed(externalDataLoadError))
      })
  })
}

export default loadExternalDataEpic
