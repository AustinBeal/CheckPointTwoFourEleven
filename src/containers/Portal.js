import { connect } from 'react-redux'
import Portal from '../components/Portal'

const mapStateToProps = (state) => {
    return {
        user: state.user,
        listings: state.listings
    }
}

export default connect(mapStateToProps)(Portal)