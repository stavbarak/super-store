import fetch from 'cross-fetch'

export const FETCH_DATA = 'FETCH_DATA';
export const REQUEST_DATA = 'REQUEST_DATA';
export const DATA_FETCHED = 'DATA_FETCHED';
export const FETCH_DATA_ITEM = 'FETCH_DATA_ITEM';
export const ITEM_FETCHED = 'ITEM_FETCHED';

//const API_URL = 'http://www.mocky.io/v2/5cdaa2e93000005e0068c8bf';

const API_URL = 'https://api.ebay.com/buy/browse/v1/item_summary/search?category_ids=108765&filter=priceCurrency:USD&limit=45';

const AUTH = 'Bearer v^1.1#i^1#I^3#r^0#p^1#f^0#t^H4sIAAAAAAAAAOVXXWwUVRTu7rbVWlo0/FhR4zKAP5SZvTO7s7szYZdsWyqr0Ba2oJQgnZ25AwOzM+PcO20XxdTK/09ieVLwgQeiRF7QKInRF03QgNGIoT4IBgWMQAhGYlNjonh3ui3bSoDCIiTuy+aee+653/edc+6dC7rLK2ZunLdxoMpzj3dPN+j2ejxsJagoL6ut9nmnlJWAAgfPnu7p3aU9vrOzkZTRLXERRJZpIOjvyugGEl1jjHJsQzQlpCHRkDIQiVgWU4kF80WOAaJlm9iUTZ3yJxtiFAtkAUb5dJST5FBEUYnVGIrZasYoJaxyCq9EIhE1JAApSuYRcmDSQFgycIziACvQgKfZcCsQRC4shgATCkXaKP8SaCPNNIgLA6i4C1d019oFWK8NVUII2pgEoeLJRGOqOZFsmNvUOjtQECue1yGFJeygkaN6U4H+JZLuwGtvg1xvMeXIMkSICsQHdxgZVEwMgbkJ+K7UoSCrQD4IhZAUlgUWFEXKRtPOSPjaOHIWTaFV11WEBtZw9nqKEjXSq6GM86MmEiLZ4M/9LXQkXVM1aMeouXWJpYmWFipOhOqok2yJRo5FsGKTblnUQLMqp6aDfFqm5UhIVSMKl99oMFpe5lE71ZuGouVEQ/4mE9dBghqO1oYt0IY4NRvNdkLFOUQFfiw7pGGQ+AWGsujgVUYurzBDhPC7w+tnYHg1xraWdjAcjjB6wpUoRkmWpSnU6Em3FvPl04Vi1CqMLTEQ6OzsZDqDjGmvDHAAsIHnF8xPyatgRqKIb67XB/216y+gNZeKDMlKpIk4axEsXaRWCQBjJRUPClyUC+d1HwkrPtr6L0MB58DIjihWh8CwAMPRsJAGELLBNCxGh8TzRRrI4YBpKUtnJHsNxJYuyZCWSZ05GWhrihjkVS4YVSGthAWVDgmqSqd5JUyqGEKCJ52Whej/qVFutNRTsmnBFlPX5GxRCr54xW4rLZKNsymo68Rwo1V/VZIoR/K208v1+pgo5mIgEkSyNCZX24xsZgKmRA61nGmFi/qWeCcsK5nJOFhK6zBZnAPtDh1mV6Wnkev+ruJE8jeYSE0ZvKcZN5sM6pAZGyLTscknCtOcu7ZazTXQIIcAtk1dh/YS9pYTfZfld4xn5c3xLt5FPUbepNe521rbsq6RElpxZ9jd4axqEr67WLM8HxGEaBSAW+JV7+a0Nfsf3EVjojfPRBgqt+G7MjDylRsvcX9sj+dD0ON5jzyUQQDMYKeBqeW+xaW+cVOQhiGjSSqDtJUGebzZkFkDs5ak2d5yj7bz2019Be/qPctBzfDLusLHVhY8s8EjV2bK2PEPVrEC4NkwELhwCLSBaVdmS9nJpRNfeK7vtUxk8TbP7nW8vPwys/nY3ztA1bCTx1NWUtrjKdlyPjaBUmpmjNu37PjRHU9vb//6zL36j31rZ1/Au7Z/sc5or7hU9eT+t19uWtts9z589hXvT3sz2viFleGv1Gr5m8PNp/lf+nsfaLzv3Qrn2GcTa+031k8fODpH3vpi71va41+OW1y+qX7yb7tN4/h+XptUd6B363luafLQ5Y+ijfOrD/68YcKcWU21qx/b99KJtZMXXPy9su54x1MTfnjoUrZ2oObTgWdOnORPlzScO9In2CdWtzMDU183P/lu3vqJTlfDB388UdLR+fmR7zf42k9djB0KHogunHXu/plZqby9X6B/bTvY3/+sd5F/+rJdhye9c7Lm0VPetld3nNnyZn3i481/7k2e23nh/b981YPp+wfqB1m68RAAAA=='


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


// export function fetchData() {
    
//   return function (dispatch) {

//     return fetch(API_URL, {
//       method: 'GET',
//       headers:{
//         'Content-Type': 'application/json',
//         'Authorization': AUTH
//       }
//     })
//       .then(
//         response => response.json(),
//         error => console.log('An error occurred.', error)
//       )
//       .then(json => {
//           dispatch(dataFetched(json.itemSummaries))
//           });

//   }
// }

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
