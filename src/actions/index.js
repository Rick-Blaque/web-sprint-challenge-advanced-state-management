import axios from 'axios';

export const FETCHING_SMURFS_LOADING = 'FETCHING_SMURFS_LOADING';
export const FETCHING_SMURFS_SUCCESS = 'FETCHING_SMURFS_SUCCESS';
export const FETCHING_SMURFS_FAIL = 'FETCHING_SMURFS_FAIL';
export const ADD_SMURF = 'ADD_SMURF'
export const ADD_ERROR = 'ADD_ERROR'


export const fetchSmurfs = () => {
    return dispatch => {
        dispatch({type: FETCHING_SMURFS_LOADING})
        axios.get('http://localhost:3333/smurfs')
            .then(res => {
                dispatch({type: FETCHING_SMURFS_SUCCESS, payload: res.data})
            })
            .catch(err => {
                console.log('err', err.message)
                dispatch({type:FETCHING_SMURFS_FAIL, payload:err.message})
            })
    }
}
export const addSmurf= (smurf) => {
    return({type: ADD_SMURF, payload: smurf})
}
export const setError = (error) => {
    return({type: ADD_ERROR, payload: error})
}

//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.