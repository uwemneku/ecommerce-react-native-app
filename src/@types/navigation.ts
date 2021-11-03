import { NavigatorScreenParams } from '@react-navigation/native';


export type onBoardingRoute = {
    splash: undefined
    login: undefined
    register: undefined
}

export type BottomTabRoute = {
    home: undefined
    favorite: undefined
    profile: undefined
    cart: undefined
}

export type RootNavigationRoutes = {
    onboarding: undefined;
    app: undefined;
}

export type AppRoutes = {
    bottomTabs: NavigatorScreenParams<BottomTabRoute>
    checkout: undefined
    history: undefined
}

export type DrawerRoutes = {
    "Home": undefined
    "My orders": undefined
    "Delivery" : undefined
    "Settings" : undefined
}