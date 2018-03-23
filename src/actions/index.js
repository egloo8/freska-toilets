import { apiURL } from '../config/Constants'

export function fetchToiletData() {
    return (dispatch, getState) => {
        dispatch({ type: 'FETCHING_TOILET_DATA' })

        return fetch(`${apiURL}/toilets`)
            .then(res => res.json())
            .then(res => {
                dispatch({ type: 'FETCHING_TOILET_DATA_SUCCESS', payload: res })
                console.log(res)
            })
            .catch((error) => {
                dispatch({ type: 'FETCHING_TOILET_DATA_FAIL', payload: 'error' })
            })
    }
}