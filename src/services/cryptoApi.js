import axios from 'axios';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
	'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
	'x-rapidapi-key': '564641734emshad03e70137c4ed2p1fd0a0jsn8694d3a515ed',
};

const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
	reducerPath: 'cryptoApi',
	baseQuery: fetchBaseQuery({ baseUrl }),
	endpoints: (builder) => ({
		getCryptos: builder.query({
			query: (count) => createRequest(`/coins?limit=${count}`),
		}),
		getCryptoDetails: builder.query({
			query: (coinId) => createRequest(`/coin/${coinId}`),
		}),
		getCryptoHistory: builder.query({
			query: ({ coinId, timePeriod }) =>
				createRequest(`coin/${coinId}/history/${timePeriod}`),
		}),
	}),
});

export const {
	useGetCryptosQuery,
	useGetCryptoDetailsQuery,
	useGetCryptoHistoryQuery,
} = cryptoApi;
