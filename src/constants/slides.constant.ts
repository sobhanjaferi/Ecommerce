import { v4 } from 'uuid'

export interface ISlideItem {
  id: string
  img: string
  alt: string
}

export const SLIDES: ISlideItem[] = [
  {
    id: v4(),
    img: 'https://www.astorebags.pk/cdn/shop/files/stay-bag-black-and-brown-9525144.jpg?v=1782129691',
    alt: 'bag',
  },
  {
    id: v4(),
    img: 'https://www.homewetbar.com/cdn/shop/files/leatherette-wrapped-fitzgerald-liquor-flask-6-oz-991466.jpg?v=1750360852&width=1200',
    alt: 'flask',
  },
  {
    id: v4(),
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJvtk34LD52boC-dUZn-W83sLJfF9IaiILMFi73_yObXrN5zuqVDSyW38&s=10',
    alt: 'shoes',
  },
  {
    id: v4(),
    img: 'https://contents.mediadecathlon.com/p3084747/eb5ac4e740a43d4e9ccafcaa63b3f05f/p3084747.jpg',
    alt: 'skate-board',
  },
  {
    id: v4(),
    img: 'https://www.buckleybelts.com/cdn/shop/files/8_5.jpg?v=1787049167&width=2048',
    alt: 'wallet',
  },
] as const
