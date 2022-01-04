import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import { Products } from '../@types';

export const storeApi = createApi({
    reducerPath: 'storeApi',
    baseQuery: fetchBaseQuery({baseUrl:"https://fakestoreapi.com/"}),
    endpoints: (builder) => ({
        getAllProducts : builder.query<Products[], void>({
            query: () => `products`,
        }),
        getProductByCategory: builder.query({
            query: (category) => `products/category=${category}`
        })
    })
})

export const {useGetAllProductsQuery, useGetProductByCategoryQuery} = storeApi