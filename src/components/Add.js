import { connect } from 'react-redux'
import Add from '../components/Add'
import {addListing, getCoords} from '../redux/actions'

const mapStateToProps = (state) => {
    return {
        listings: state.listings,
        map: state.map
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addListing: value => dispatch(addListing(value)),
        getCoords: address => dispatch(getCoords(address))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Add)