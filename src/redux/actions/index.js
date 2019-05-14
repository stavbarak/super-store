import fetch from 'cross-fetch'

export const FETCH_DATA = 'FETCH_DATA';
export const REQUEST_DATA = 'REQUEST_DATA';
export const DATA_FETCHED = 'DATA_FETCHED';
export const FETCH_DATA_ITEM = 'FETCH_DATA_ITEM';
export const ITEM_FETCHED = 'ITEM_FETCHED';

const API_URL = 'http://www.mocky.io/v2/5cdaa2e93000005e0068c8bf';


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

  export function fetchDataItem(id) {
    
    return function (dispatch) {

      return fetch(API_URL, {
        method: 'GET',
      })
        .then(
          response => response.json(),
          error => console.log('An error occurred.', error)
        )
        .then(json => {
          const currentItem = json.find((item) => {
              return item.id === id ;
            });
          dispatch(itemfetched(currentItem))
          
          })

    }
  }

  export function itemfetched(currentItem) {
    return {
      type: ITEM_FETCHED,
      payload: currentItem
    }
  }

export const dataFetched = (data) => {
    return {
        type: DATA_FETCHED,
        payload: data
    }
}
