import fetch from 'cross-fetch'

export const FETCH_DATA = 'FETCH_DATA';
export const REQUEST_DATA = 'REQUEST_DATA';
export const DATA_FETCHED = 'DATA_FETCHED';

const API_URL = 'http://www.mocky.io/v2/5cd864f4300000a22a74cda3';


export function fetchData(dispatch) {

    return fetch(API_URL, {
        method: 'GET',
      })
        .then(
          response => response.json(),
          error => console.log('An error occurred.', error)
        )
        .then(json =>
          dispatch(dataFetched(json))
        )
  }


export const dataFetched = (data) => {
    return {
        type: DATA_FETCHED,
        payload: data
    }
}
