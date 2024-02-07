import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

type Properties ={
    title:string,
    description:string,
    price:number,
    type:string,
    userId:string

}
const userString = localStorage.getItem("user");
let token: string | null = null;
if (userString) {
  const user = JSON.parse(userString);
  token = user.accessToken;
}
export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080/api', prepareHeaders: (headers) => {
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }
    return headers;
  }, }), 
  endpoints: (builder) => ({
    properties: builder.query<Properties, {}>({
      query: () => ({
        url: '/properties',
      }),
    }),
  
  }),
});

export const { usePropertiesQuery } = api;