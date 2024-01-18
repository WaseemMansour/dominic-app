import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from './constants';

const baseQuery = fetchBaseQuery({ baseUrl: `${BASE_URL}/api` });

const baseQueryWithReauth = async (args: any, api: any, extraOptions: any) => {
  const result = await baseQuery(args, api, extraOptions);

  if (result.error) {
    // TODO : Add Handler for Generic Errors
    console.error({ error: result.error });
  }
  return result;
};

export const apiSlice = createApi({
  baseQuery: baseQueryWithReauth,
  endpoints: (_builder) => ({}),
});
