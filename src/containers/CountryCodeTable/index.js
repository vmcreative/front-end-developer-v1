import { connect } from 'react-redux'

import { CountryCodeTable } from '../../components'
import { appInitialised } from '../../state/actions'
import { getExternalData } from '../../state/selectors'

function mapStateToProps (state) {
  return {
    externalData: getExternalData(state)
  }
}

function mapDispatchToProps (dispatch) {
  return {
    initialiseApp: () => dispatch(appInitialised())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CountryCodeTable)
