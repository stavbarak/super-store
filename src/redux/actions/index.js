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
'v^1.1#i^1#f^0#p^1#r^0#I^3#t^H4sIAAAAAAAAAOVXW2wUVRjuttsqgWIKaKFcuky9xOLMntnd2e6M3cVtC2EF2souDVS0mZ050w6dnRnnnKEsqNn0oYSbFhMiIQSLmAgBU4kBTYyiD2K8BBMLDyTCqz6YeEsj0ZB4ZrqUbSVAYRES92Uz//nPf77v+///XECuYlr9wIqBPys9D5QO5UCu1ONhp4NpFeVLZpaV1pSXgAIHz1Du0Zy3v+ynRiRmNFNYA5Fp6Aj6Nmc0HQmuMUrZli4YIlKRoIsZiAQsCcn46lVCgAGCaRnYkAyN8iVaopTcIEscC1lO4cWGICcSq341ZsqIUlCUJT4cktISm5Z4PkzGEbJhQkdY1HGUCgCWpwFHB0CKDQosJwDANHCRTsrXAS2kGjpxYQAVc+EK7lyrAOuNoYoIQQuTIFQsEV+ebIsnWpa1phr9BbFieR2SWMQ2mvjVbMjQ1yFqNrzxMsj1FpK2JEGEKH9sbIWJQYX4VTC3Ad+VWgnzUqAhHGb5CB+SuKIoudywMiK+MQzHosq04roKUMcqzt5MUCJGeiOUcP6rlYRItPicv+dsUVMVFVpRallTfH28vZ2KEZ02NYmWSCPbJFixQbevaaFZJaCkg1xaoqWGkKI0yIH8QmPR8ipPWqnZ0GXV0Qz5Wg3cBAlqOFkbUKANcWrT26y4gh1EhX7cVQ1DfKeT07Ek2rhHd9IKM0QIn/t58wyMz8bYUtM2huMRJg+4EkUp0TRVmZo86JZivno2oyjVg7Ep+P19fX1MX5AxrG5/AADWv271qqTUAzOkF4mv0+uuv3rzCbTqUpEgmYlUAWdNgmUzKVUCQO+mYkE+EAmE87pPhBWbbP2XoYCzf2JDFKtBQlCBEuAACAQiIT4EitEhsXyR+h0cMC1m6Yxo9UJsaqIEaYnUmZ2BlioLQU4JBCMKpOUwr9AhXlHoNCeHSRVDCCBMk90v8n9qlFst9aRkmLDd0FQpW5yCL1qxW3K7aOFsEmoaMdxq1V+XJHJI3n16Tq9PhaITA5EgoqkyTm0zkpHxGyLZ1BxTl4v6jnjHTTORydhYTGswUaQN7d5sZtelp5LT/r7iRPI3lkhVHjunGTebDNokMRZEhm2RGwrT5hxbKaMX6mQTwJahadDqYO840fdZfqe4V94e7yIe1FPkTXqdvZu1LWkqKaGue8Tu3mZVFfH9xZrluEiQi7AA3BGvZjenqex/cRZNhd4KA2Eo34V7pX/iIzdW4v7Yfs9J0O85Qd7JwA8eY+vA4oqytd6yGTVIxZBRRYVBardO3m4WZHph1hRVq7TCo77x/bbzBc/qoRfA3PGH9bQydnrBKxssuDZSzj5UXcnygCOXpiBLrqedoO7aqJd9xDtn9sAuf+1B8+RwKvdebPilA7tHP0iAynEnj6e8xNvvKdnhO/L+jM+XJuYvebxny+XfYU9ncPj4h5X6aLUZOVX1w9CFtQ8fqG0Pb/3u7cZ5H7+ZW31u37mZn27665svuIWng0fqr/xxdMPrl3ceHL704Gn9113vHDp0/MzwMaM6i544A7+sL/duj649qB0Njox6E+cD+2d9u6fq3cOpuqdPXVpVt+PCJ6Vzy0eaB/Yu2/Yqtz5R1Vqzr8qaRS3Z+Yrvo9HPuue38euELV/3fHU6XP3L0rOzjz0/6Bu8sqdr5dLa1MW5P1dszJw4bMfbfxseXDTy4/bje+3dK5vqVzS+rNUs1mb0PjUivNVhLrS2GtPn7N9Q1vXia38/c3jBs/NqL8pnQ0n6ya1V+xZ0z1k0lr5/AHJWburwEAAA'
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
