import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Ship, ShipResponse } from '../interfaces/interface';

export const shipsApi = createApi({
  reducerPath: 'shipsApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/' }),
  endpoints: (builder) => ({
    getShips: builder.query<ShipResponse, void>({
      query: () => '1nWgEE'
    })
  })
});

export const { useQuery: useGetShipsQuery } = shipsApi.endpoints.getShips;


