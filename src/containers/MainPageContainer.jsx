import { connect } from 'react-redux'
import Main from "../components/Main";
import { changeValueActionCreator} from "../redux/reducers";

let mapStateToProps = (state) => {
    return {
        photos: state.photos,
        clientId: state.clientId,
        token: state.token,
        searchValue: state.searchValue,
        baseUrl: state.baseUrl,
        page: state.page,
        totalPages: state.totalPages,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        changeValue: (name, value) => {
            dispatch(changeValueActionCreator(name, value))
        },
    }
}
const MainPageContainer = connect(mapStateToProps, mapDispatchToProps)(Main)

export default MainPageContainer