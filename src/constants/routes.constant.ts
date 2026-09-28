interface RouteList {
  HOME: string
  SHOP: string
  CART: string
  LOGIN: string
  REGISTER: string
  ABOUT: string
}

export const ROUTES: RouteList = {
  HOME: '/',
  SHOP: '/shop',
  CART: '/cart',
  LOGIN: '/auth/login',
  REGISTER: '/auth/register',
  ABOUT: '/aboutUs',
} as const
