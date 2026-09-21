interface RouteList {
  HOME: string
  SHOP: string
  CARD: string
  LOGIN: string
  REGISTER: string
  ABOUT: string
}

export const ROUTES: RouteList = {
  HOME: '/',
  SHOP: '/shop',
  CARD: '/card',
  LOGIN: '/auth/login',
  REGISTER: '/auth/register',
  ABOUT: '/aboutUs',
} as const
