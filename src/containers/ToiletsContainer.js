import { connect } from 'react-redux'
import { fetchToiletData } from '../actions'
import Toilets from '../components/Toilets'

const mapStateToProps = (state) => {
    return {
        api: state.api
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchToiletsData: () => {
            dispatch(fetchToiletData())
        }
    }
}

const ToiletsContainer = connect(
    mapStateToProps, mapDispatchToProps
)(Toilets)

export default ToiletsContainer