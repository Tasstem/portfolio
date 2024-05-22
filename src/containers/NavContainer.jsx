import { connect } from 'react-redux'
import Navigation from '../components/Navigation';
import { changeValueActionCreator} from "../redux/reducers";

let mapStateToProps = (state) => {
    return {
        photos: state.photos,
        type: state.type,
        searchValue: state.searchValue,
        clientId: state.clientId,
        token: state.token,
        baseUrl: state.baseUrl,
        page: state.page,
        totalPages: state.totalPages,
        loaderActivity: state.loaderActivity
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        changeValue: (name, value) => {
            dispatch(changeValueActionCreator(name, value))
        },
    }
}
const NavContainer = connect(mapStateToProps, mapDispatchToProps)(Navigation)

export default NavContainer