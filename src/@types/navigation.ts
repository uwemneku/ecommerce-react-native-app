import { Products } from './Products';
import { NavigatorScreenParams } from '@react-navigation/native';


export type onBoardingRoute = {
    splash: undefined
    login: undefined
    register: undefined
}

export type BottomTabRoute = {
    Home: undefined
    Favorite: undefined
    Profile: undefined
    Cart: undefined
}

export type DrawerRoutes = {
    "BottomTab": NavigatorScreenParams<BottomTabRoute>
    "My orders": undefined
    "Delivery" : undefined
    "Settings" : undefined
    "Product" : {product: Products}
}

