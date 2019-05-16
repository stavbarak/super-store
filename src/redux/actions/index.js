import fetch from 'cross-fetch'

export const FETCH_DATA = 'FETCH_DATA';
export const REQUEST_DATA = 'REQUEST_DATA';
export const DATA_FETCHED = 'DATA_FETCHED';
export const FETCH_DATA_ITEM = 'FETCH_DATA_ITEM';
export const ITEM_FETCHED = 'ITEM_FETCHED';
export const ITEM_DETAILS_FETCHED = 'ITEM_DETAILS_FETCHED';

//const API_URL = 'http://www.mocky.io/v2/5cdaa2e93000005e0068c8bf';

const API_URL = 'https://api.ebay.com/buy/browse/v1/item_summary/search?category_ids=108765&filter=priceCurrency:USD&limit=45';

const TOKEN = 
'v^1.1#i^1#r^0#f^0#p^1#I^3#t^H4sIAAAAAAAAAOVXa2wUVRTutrs1DbRiRDQE4zI8EsV5d/YxsGu3LZVFStfu2kCT2szM3qFDZ2eGuXdpN4KWalqNISbAL5vUpinxkcbECAnRKChYElJiNJFEQ6LgD8QmGMSEH/aHd2aXsq0EKCxC4v7ZzLnnnvt93znnPpi+yqpnBjYMXK32PFQ+0sf0lXs87AKmqtK3pqaifKmvjCly8Iz0rezz9lf8tg5KGd0SWwG0TAMCf29GN6DoGiNE1jZEU4IaFA0pA6CIFDEZa94kchQjWraJTMXUCX+8MUIonBQOBlUQkoDM8yyDrca1mCkzQgisHAoLPF8LQoys1jrjEGZB3IBIMlCE4Bg2TDICyQZSLCtyYZHnKC4gtBP+NmBDzTSwC8UQUReu6M61i7DeHKoEIbARDkJE47GmZEss3rh+c2odXRQrWtAhiSSUhbO/Gsw08LdJehbcfBnoeovJrKIACAk6ml9hdlAxdg3MHcB3pRaEQADwSiAkgBAfALUlkbLJtDMSujkOx6KlSdV1FYGBNJS7laJYDXk7UFDhazMOEW/0O38vZiVdUzVgR4j19bGtsUSCiGKhdtZLtkTCrIWxIpNMtDaSrMqpMi/ICqkEa1U1mOYKC+WjFWSes1KDaaQ1RzTo32yieoBRg7nasEXaYKcWo8WOqchBVOzHX9NQCLY7Sc1nMYu6DCevIIOF8Luft87AzGyEbE3OIjATYe6AK1GEkCxLSxNzB91aLJRPL4wQXQhZIk339PRQPTxl2ttojmFYekvzpqTSBTISgX2dXs/7a7eeQGouFQXgmVATUc7CWHpxrWIAxjYiyoe5EBco6D4bVnSu9V+GIs707I4oVYeEZEVgWU6WASczQC5Fg0QLNUo7MIAs5ciMZHcDZOmSAkgFl1k2A2wtLfKCyvEhFZDpQFgla8OqSspCOoCLGAAGAFlWwqH/U5/cbqUnFdMCCVPXlFxJ6r10tW6nE5KNckmg69hwu0V/Q5LQIXnv6Tm9Ph+KTgyIg0iWRjm1TSlmhjYlvKc5pk4X9V3xjllWPJPJIknWQbw0+9l92stuSE/Dp/0DxQnnL59ILZ0/pik3mxTcqVA2gGbWxjcUqsU5tVJmNzDwJoBsU9eB3cbedaIfsPzOc6+8M96lO6fnyxv3Onsva1vRNVxCnfeJ3f3NqiahB4s1Kwghhgmwwbvj1eDmNJX7L86i+dDbYEIE0vfgWknPfuRGy9wf2+85zPR7PsHvZIZmVrErmOWVFS95KxYuhRoClCapFNS2GfjtZgOqG+QsSbPLKz3avu8Hfyh6Vo90ME/MPKyrKtgFRa9sZtn1ER/78OPVbJgR2AC+nIZ5rp1ZcX3Uyy7xLl574Lh8eWTrbvn8ldrg6dZDe1a9epqpnnHyeHxl3n5P2SDX3To5Ri/6IPb7r/GvFtT3nnmHWbjBNzX1zd5z3qnm1rqD/p/XTsKuiz+NNzy7a0iYjE/3JFq+7j4xdmz8UON09daad99InFo1SQ+djNDTdW2Ti9lTB58fXn3Bvyh1evSx9/cOjhyYuEp9N3RiZdX00iUf9Y1Qaz9ef5y/tGb/p+fGOs6nyrizZzuU0SXeK6+fHN4x0PnZkakvDi985ZfLWk3NMSnevOiyb6L6kZefC31ev3d16sPt5cMXB8avdv+47OiJfWNfdjVdeHP3W43LXgt1Lp845pt4atfw0TN/fNtS93fzYM2QcOnMlvFH/+zYs2NjcPuup+vs99q7enIbJ14YzY2+/WTT6rNH/sqn7x8l/ghD8BAAAA=='
const AUTH = `Bearer ${TOKEN}`;

export function fetchData(dispatch) {
    return fetch(API_URL, {
        method: 'GET',
        headers:{
          'Content-Type': 'application/json',
          'Authorization': AUTH
        }
      })
        .then(
          response => response.json(),
          error => console.log('An error occurred.', error)
        )
        .then(json =>
          dispatch(dataFetched(json.itemSummaries))
        )
  }


  export function fetchDataItem(id) {
    
    return function (dispatch) {

      return fetch(API_URL, {
        method: 'GET',
        headers:{
          'Content-Type': 'application/json',
          'Authorization': AUTH
        }
      })
        .then(
          response => response.json(),
          error => console.log('An error occurred.', error)
        )
        .then(json => {
          const currentItem = json.itemSummaries.find((item) => {
              return item.itemId === id ;
            });
          dispatch(itemfetched(currentItem))
          console.log(currentItem)
          dispatch(fetchItemDetails(currentItem))
          })
    }
  }


  export function fetchItemDetails(item) {
    return function (dispatch) {
    return fetch(`https://api.ebay.com/commerce/catalog/v1_beta/product/${item.epid}`, {
        method: 'GET',
        headers:{
          'Content-Type': 'application/json',
          'Authorization': AUTH
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
