import fetch from 'cross-fetch'

export const FETCH_DATA = 'FETCH_DATA';
export const REQUEST_DATA = 'REQUEST_DATA';
export const DATA_FETCHED = 'DATA_FETCHED';
export const FETCH_DATA_ITEM = 'FETCH_DATA_ITEM';
export const ITEM_FETCHED = 'ITEM_FETCHED';
export const ITEM_DETAILS_FETCHED = 'ITEM_DETAILS_FETCHED';
export const NO_EPID = 'NO_EPID';

//const API_URL = 'http://www.mocky.io/v2/5cdaa2e93000005e0068c8bf';

const API_URL = 'https://api.ebay.com/buy/browse/v1/item_summary/search?category_ids=108765&filter=priceCurrency:USD&limit=45';

const APP_TOKEN = 
'v^1.1#i^1#I^3#f^0#p^1#r^0#t^H4sIAAAAAAAAAOVXbWwURRjuXe/aVChoaKwCMccq+Hl7u3vdvdsNd3qlRS5Cr3IFSpHg7N5sWbnb3ezM0Z4C1oIoCgoqFeIPasSi+JEIERFJjX/Ej5jGD0yMYiRBwB9KAoJoNDq7d5RrJUChCIm3Py77zjvvPM/zvu/MDtNRVnHbymkrf6t0lbu7O5gOt8vFjmAqyry3jyp1j/WWMEUOru6Omzo8naWHJyOQSZvSTIhMQ0fQ155J60hyjBEqa+mSAZCGJB1kIJKwIiVjM6ZLHM1IpmVgQzHSlC9eF6EUUWb4GhCsERlBrQmJxKqfitlkRCg5BHgR8kDmg6zAcZCMI5SFcR1hoOMIxTGs6Gd4Pys0sYLEchIv0KGQ2EL5ZkMLaYZOXGiGijpwJWeuVYT17FABQtDCJAgVjcemJhOxeF19Q9PkQFGsaEGHJAY4iwa+TTFS0DcbpLPw7Msgx1tKZhUFIkQFovkVBgaVYqfAXAB8R2oViGEhxIMwBEwqGFaGRcqphpUB+Ow4bIuW8quOqwR1rOHcuRQlasgPQAUX3hpIiHidz/67NwvSmqpBK0LV18bmxhobqSgRanEtsIAfZU2CFRv+xpl1flblVDnIy4pfCdWoaijFFRbKRyvIPGilKYae0mzRkK/BwLWQoIaDtWGKtCFOCT1hxVRsIyr2C5/SUAi32EnNZzGLF+p2XmGGCOFzXs+dgf7ZGFuanMWwP8LgAUeiCAVMU0tRgwedWiyUTzuKUAsxNqVAoK2tjW4L0obVGuAYhg00z5ieVBbCDKCIr93reX/t3BP8mkNFIW1K/CWcMwmWdlKrBIDeSkWDIhfmhILuA2FFB1v/ZSjiHBjYEcPWIaLCiSkeiAKvyDwAw9Eh0UKRBmwcUAY5fwZYiyA200CBfoXUWTYDLS0lBXmVC4ZV6E8JouqvEVXVL/MpgVQxhAyEsqyI4f9To5xvqScVw4SNRlpTcsNS8MNX7FaqEVg4l4TpNDGcb9WfkSSySV5yenavD4miHQORIMDUaLu2acXIBAxANjXbtMBBfVG8Y6YZz2SyGMhpGB+eDe0ybWZnpKeR4/6K4kTyl0+klsqf07STTRotVmgLIiNrkU8UOmEfW03GIqiTTQBbRjoNrdnsRSf6CsvvEPfKC+M9fAf1EHmTXucuaW0raY2U0ILLw+4yZ1UD+MpizfJ8mOGCbOjicjrFyWlT7j84i4ZEb5qBMExdgu/KwMBbbrTE+bGdrreZTtdb5KLMBJiJ7I3MhLLSWZ7SkWORhiGtAZVGWqtOLm8WpBfBnAk0y13m0p754rG9Rffq7vnMdf0364pSdkTRNZsZf3rEy46urmRFhmcF8nC80MLceHrUw17rqfqUul46vDrx0Cujm38ZVTWmfE1kyQ1MZb+Ty+Ut8XS6SjY05Goqd27ueqOvPPfeo5s9fS9unL8C3po4dM9G77Hv2p/fP/rjdvW+XeP8h/rG/34VW73pryPe1z86EH+wZ0F5qHemZ+P8pRWZcT1f7550YPLxviM/S3f0tva4gZx4Wt365JY50SPr5m3veuGPPYLngPvlleO+fxUALrR24paquVefnFC/eN9r25fjETu2dbz5TfOxD3tXrVpev3Vn09G7dqG/P6ne0b2kZ9Znc9Ynd7jfX7eBbl/x1PE1k6Yto6o+f6n22d4P3t3fAn76ds+mpXfqO49W7zk55sdb7vf1dWUPvpMbs+/mH3zrD9d6qceXndi97c+DI7/s+mrv1rvnbWtmlz28ln7kxDVd039d/cRzpfn0/QOOTqDK8RAAAA=='

const USER_TOKEN =
'AgAAAA**AQAAAA**aAAAAA**6YzdXA**nY+sHZ2PrBmdj6wVnY+sEZ2PrA2dj6AEkoupC5aHpgmdj6x9nY+seQ**ev4FAA**AAMAAA**Mflb0ZbULjU8u6S3Thqd70tloKTg+gVGAQKJnwbe7J9ycOmchtWmTpsrVaCJo7UUGUw3EqNdpHcbmc5Cz2FY/iedQZxzF8ePIiRD1YGlfkYzi0OrSwj8YUpZsq33FrG2UvqQGErbF0yhRcLfByuLGVjLExVUbBUEpNO0j+lvRqAc/7I61EjVGkLtw4Xbiw+u3Upy6p3NnYR1wgnL77AuB4d0a+TH0jTIbvJBSBV8SgBhJ4z8BmsTcP0ICo8TKZ49Te+W91ipks2Nr5M5OQagMxVCqIjtThvEm1HXt2WxzqePHWMF1DF5nfqYzFiyIv67VpdicJVuUqZkdTuqUUEoRECScYWsozpFoytjlVXJLrerr4aHITdmrdew+TctU2WbqlKnReS1sHA4WcsXduVTgcBXK65SytFhSd0hqcPIDD7eMKkxXlx69WT0WtlumBhTtud6prsl/Wn0iCbe8mY+EMCbEqZ/DpR8HYQwWvnzLRUhu4k4uUpK0owzMMoEQ+IiWjdlVkVKCglO9y/Umv4usFoxO9nmuxSWSWC1URM2uVEgN4+CdyH5ZjBWjcmbo/C1vZAx3o42Xl9cISAsOSPnpktOIPL3cWdlk4tj6ZV22SuezutX8GDb8ka80mAj10dxdaX4zAt4GgYi5QddN4RiG9bDirddNuXIxItnq31k7gwvmV9j3ZtqmJEHsst2MR/CcyxOOE+7a5oMplqyk9YbHNxJCeoDsvG8GDvEdoXLSekxO4u+j3rdKCNECVmE1fAw'

const APP_AUTH = `Bearer ${APP_TOKEN}`;
const USER_AUTH = `Bearer ${USER_TOKEN}`;

export async function fetchData(dispatch) {
    return await fetch(API_URL, {
        method: 'GET',
        headers:{
          'Content-Type': 'application/json',
          'Authorization': APP_AUTH
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
    return async function (dispatch) {
      return await fetch(API_URL, {
        method: 'GET',
        headers:{
          'Content-Type': 'application/json',
          'Authorization': APP_AUTH
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
              'Content-Type': 'application/json',
              'Authorization': USER_AUTH
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
