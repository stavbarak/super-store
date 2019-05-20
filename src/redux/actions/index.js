import fetch from 'cross-fetch'

export const FETCH_DATA = 'FETCH_DATA';
export const REQUEST_DATA = 'REQUEST_DATA';
export const DATA_FETCHED = 'DATA_FETCHED';
export const FETCH_DATA_ITEM = 'FETCH_DATA_ITEM';
export const ITEM_FETCHED = 'ITEM_FETCHED';
export const ITEM_DETAILS_FETCHED = 'ITEM_DETAILS_FETCHED';
export const NO_EPID = 'NO_EPID';

const API_URL = 'http://www.mocky.io/v2/5ce2bcc0340000397a773702';


export async function fetchData(dispatch) {
    return await fetch(API_URL, {
        method: 'GET',
        headers:{
          'Content-Type': 'application/json'
        }
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
    return async function (dispatch) {
      return await fetch(API_URL, {
        method: 'GET',
        headers:{
          'Content-Type': 'application/json'
        }
      })
        .then(
          response => response.json(),
          error => console.log('An error occurred.', error)
        )
        .then(json => {
          const currentItem = json.find((item) => {
              return item.itemId === id ;
            });
          dispatch(itemfetched(currentItem))
          console.log(currentItem)
          //dispatch(fetchItemDetails(currentItem))
          })
    }
  }

// items don't have epid - ???
  export function fetchItemDetails(item) {
    console.log(item)
    if (item.epid) {
      return async function (dispatch) {
        return await fetch(`https://api.ebay.com/commerce/catalog/v1_beta/product/${item.epid}`, {
            method: 'GET',
            headers:{
              'Content-Type': 'application/json'
            }
          })
            .then(
              response => response.json(),
              error => console.log('An error occurred.', error)
            )
            .then(json =>
              console.log(json)
              //dispatch(itemDetailsFetched(json))
            )
        }
    }
    else {
      return {
        type: NO_EPID
      }
    }

  }

  export function itemDetailsFetched() {
    return {
      type: ITEM_DETAILS_FETCHED
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
