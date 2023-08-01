import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


const url = process.env.REACT_APP_USER_TOKEN
console.log(url);
export const coinCapApi = createApi({
  reducerPath: 'coinCapApi',
  endpoints: (builder) => ({
    getCoins: builder.query({
      queryFn: async (arg) => {
        try {
          const response = await fetch(url);
          return { data: await response.json() };
        } catch (e) {
          return { error: e.message };
        }
      },
    }),
    }),
});
export const { useGetCoinsQuery } = coinCapApi; 
