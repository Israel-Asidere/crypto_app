import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const cryptoApiHeaders = {
  'X-RapidAPI-Key': '70e0d10210msh811aacc75596cf5p1ca739jsndef28be51041',
  'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com/coins'

const createRequest = url => ({ url, headers: cryptoApiHeaders })
export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: builder => ({
    getCryptos: builder.query({
      query: count => createRequest(`/coins?limit=${count}`)
    }),
    getExchanges: builder.query({
      query: () => createRequest(`/exchnages`)
    }),
    getCryptoDetails: builder.query({
      query: coinId => createRequest(`/coin/${coinId}`)
    }),
    getCryptoHistory: builder.query({
      query: (coinId, timePeriod) =>
        createRequest(`/coin/${coinId}/history/${timePeriod}`)
    })
  })
})

export const {
  useGetCryptosQuery,
  useGetCryptoDetailsQuery,
  useGetCryptoHistoryQuery,
  useGetExchangesQuery
} = cryptoApi
// const options = {
//     method: 'GET',
//     url: 'https://coinranking1.p.rapidapi.com/coins',
//     params: {
//       referenceCurrencyUuid: 'yhjMzLPhuIDl',
//       timePeriod: '24h',
//       'tiers[0]': '1',
//       orderBy: 'marketCap',
//       orderDirection: 'desc',
//       limit: '50',
//       offset: '0'
//     },
//     headers: {
//       'X-RapidAPI-Key': '70e0d10210msh811aacc75596cf5p1ca739jsndef28be51041',
//       'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
//     }
//   };
