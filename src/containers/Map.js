import { connect } from 'react-redux'
import Map from '../components/Map'

const mapStateToProps = (state) => {
    return {
        mapOps: state.mapOps
    }
}

export default connect(mapStateToProps)(Map)