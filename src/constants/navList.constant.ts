import { ROUTES } from '@/constants/routes.constant'

interface INavItem {
  title: string
  route: string
}

export const NAVLIST: INavItem[] = [
  {
    title: 'Home',
    route: ROUTES.HOME,
  },
  {
    title: 'Shop',
    route: ROUTES.SHOP,
  },
  {
    title: 'Cart',
    route: ROUTES.CART,
  },
  {
    title: 'Login / SignIn',
    route: ROUTES.LOGIN,
  },
  {
    title: 'About',
    route: ROUTES.ABOUT,
  },
] as const
