import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query'
import { cryptoApi } from './cryptoApi'

const cryptoNewsHeaders = {
  'X-BingApis-SDK': 'true',
  'X-RapidAPI-Key': '70e0d10210msh811aacc75596cf5p1ca739jsndef28be51041',
  'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
}

const baseUrl = 'https://bing-news-search1.p.rapidapi.com/news'

const createRequest = url => ({ url, headers: cryptoNewsHeaders })

export const cryptoNewsApi = createApi({
  reducerPath: 'cryptoNewsApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: builder => ({
    getCryptoNews: builder.query({
      query: ({ newsCategory, count }) =>
        createRequest(
          `/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`
        )
    })
  })
})

export const { useGetCryptoNewsQuery } = cryptoNewsApi
