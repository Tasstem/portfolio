const CHANGE_VALUE = 'CHANGE_VALUE'
let initialState = {
    clientId: 'zN60THTaka4xct0_n3CALEukaTDL8-Ub24x-AvVhvzs',
    token: "bwkkCHLGdzorPxDXSDAs7ZNzzbUUtjrk9L0SOfhMlg4",
    baseUrl: 'https://api.unsplash.com',
    searchValue: 'LION',
    photos: [],
    totalPages: 0,
    page: 1
    
}


function reducer(state = initialState, action) {
    switch (action.type) {
        case "CHANGE_VALUE":
            return { ...state, [action.name]: action.value }
            default: return state;
        }
    }
    
    
    export const changeValueActionCreator = (name, value) => ({ type: CHANGE_VALUE, name, value })
    export default reducer
    