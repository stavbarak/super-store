import fetch from 'cross-fetch'

export const FETCH_DATA = 'FETCH_DATA';
export const REQUEST_DATA = 'REQUEST_DATA';
export const DATA_FETCHED = 'DATA_FETCHED';
export const FETCH_DATA_ITEM = 'FETCH_DATA_ITEM';
export const CLEAR_DATA_ITEM = 'CLEAR_DATA_ITEM';
export const ITEM_FETCHED = 'ITEM_FETCHED';
export const ITEM_DETAILS_FETCHED = 'ITEM_DETAILS_FETCHED';
export const SWITCH_TAB = 'SWITCH_TAB';

const API_URL = 'http://www.mocky.io/v2/5ce2ea44340000127b7737d7';


export async function fetchData(dispatch) {
  return await fetch(API_URL, {
      method: 'GET'
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
        method: 'GET'
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

  export function clearDataItem() {
    return {
      type: CLEAR_DATA_ITEM
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

export const switchTab = (tab) => {
  return {
      type: SWITCH_TAB,
      payload: tab
  }
}
