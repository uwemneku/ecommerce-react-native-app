import { Products } from './../@types/Products';
import React from 'react'
import { View, Text } from 'react-native'
import { getLikedProductsById, saveProduct, getProductsInCartById , addProductToLikes} from '../store/features/products'
import { useAppDispatch, useAppSelector } from './redux'
import {useGetAllProductsQuery} from '../services'

export default function useProductAction(productId: string) {
    const dispatch = useAppDispatch()
    const { item } = useGetAllProductsQuery(undefined, {
        selectFromResult : ({data}) => ({
            item: data?.find(({id}) => id === productId)
        })
    });
    
    
}
