const initialState = {
    isFetching: true,
    data: null,
    hasError: false,
    errorMessage: null
}

function api (state = initialState, action) {
    switch (action.type) {
        case 'FETCHING_TOILET_DATA':
            return {
                ...state,
                isFetching: true,
                data: null,
                hasError: false,
                errorMessage: null
            }
        case 'FETCHING_TOILET_DATA_SUCCESS':
            return {
                ...state,
                isFetching: false,
                data: action.payload,
                hasError: false,
                errorMessage: null
            }
        case 'FETCHING_TOILET_DATA_FAIL':
            return {
                ...state,
                isFetching: false,
                data: null,
                hasError: true,
                errorMessage: action.payload
            }
        default:
            return state
    }
}

export default function freskaToilets(state = {}, action) {
    return {
        api: api(state.api, action)
    }
}