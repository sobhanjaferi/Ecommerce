import { ProductItem } from '@/types/productItem'
import { NextResponse } from 'next/server'
import { v4 } from 'uuid'

// product bloack
// {
//   id : v4(),
//   title : "",
//   mainImage : "",
//   price : 0,
//   content : ``,
//   gallery : []
// }

const data: ProductItem[] = [
  {
    id: v4(),
    title: 'MacBook Pro (16-inch, 2024)',
    mainImage: 'https://cdn.mos.cms.futurecdn.net/HajFKum5rjNrhyZsekkjfW.jpg',
    price: 0,
    content: `SUPERCHARGED BY M4 PRO OR M4 MAX — The 16-inch 
    MacBook Pro with the M4 Pro or M4 Max chip gives you outrageous performance 
    in a powerhouse laptop built for Apple Intelligence.* 
    With all-day battery life and a breathtaking Liquid Retina XDR display 
    with up to 1600 nits peak brightness, it’s pro in every way.
    *CHAMPION CHIPS — The M4 Pro chip blazes through demanding tasks like compiling millions of lines of code.
    M4 Max can handle the most challenging workflows, 
    like rendering intricate 3D content.BUILT FOR APPLE INTELLIGENCE—Apple 
    Intelligence is the personal intelligence system that helps you write, express yourself, 
    and get things done effortlessly. With groundbreaking privacy protections, 
    it gives you peace of mind that no one else can access your data—not even Apple.
    *ALL-DAY BATTERY LIFE — MacBook Pro delivers the same exceptional 
    performance whether it’s running on battery or plugged in.`,
    gallery: [
      'https://www.notebookcheck.net/fileadmin/_processed_/3/f/csm_IMG_7593_a97c65292f.jpg',
      'https://sm.pcmag.com/pcmag_me/review/a/apple-macb/apple-macbook-pro-16-inch-2023-m3-max_cah1.jpg',
      'https://s.yimg.com/ny/api/res/1.2/HZURi2BOEpKRxBToVSYk3A--/YXBwaWQ9aGlnaGxhbmRlcjt3PTI0MDA7aD0xNTQ2/https://s.yimg.com/os/creatr-uploaded-images/2024-11/ac6669e0-9c7e-11ef-bffb-b5cce5d36e6a',
    ],
  },

  {
    id: v4(),
    title: 'Lenovo 16” ECO Laptop Backpack',
    mainImage:
      'https://m.media-amazon.com/images/I/61DyiuPm5iL._AC_SL1500_.jpg',
    price: 0,
    content: `Lasting Protection: Elevate your daily commutes with the Lenovo 16” 
    ECO Laptop Backpack B210. Crafted from high-quality water-repellent snow yarn polyester, 
    this backpack showcases both elegance and durability. 
    The lightweight yet robust exterior fabric, made of 80% recycled PET, 
    ensures your personal belongings remain well-protected
    Optimal Laptop Guardianship: Designed to accommodate your digital lifeline, 
    the backpack's standout feature is its expansive laptop compartment. 
    Fit laptops up to 16” effortlessly and experience the peace of mind that comes with a padded, 
    secure haven for your valuable device. The B210 ECO Backpack features a one-year warranty`,
    gallery: [
      'https://m.media-amazon.com/images/I/61geBGS-2HL._AC_SL1500_.jpg',
      'https://m.media-amazon.com/images/I/51FdekEpE7L._AC_.jpg',
      'https://m.media-amazon.com/images/I/61J12kx+-XL._AC_SL1500_.jpg',
    ],
  },

  {
    id: v4(),
    title: 'Ninja Pods Coffee Maker',
    mainImage:
      'https://m.media-amazon.com/images/I/71fIZcW76ZL._AC_SL1500_.jpg',
    price: 0,
    content: `BREW WITH PODS OR GROUNDS: Brew a single-serve cup of coffee with grounds for ultimate flavor or with a coffee pod for ultimate convenience in one small footprint.
    3 BREW STYLES: Select Classic, Rich, or Over Ice for your grounds or coffee pods.
    ULTIMATE BREW VERSATILITY: Brew a 6, 8, 10, or 12-oz. pod brew or choose from a 6, 8, 10, 12, 18, or 24-oz. grounds brew. Brew more drink options vs. a leading single-serve coffee maker.
    COMPACT DESIGN AND STORAGE: Sleek, compact design takes up little countertop space, with a storage drawer for the brew basket or permanent filter when not in use.
    ICED COFFEE: Brew fresh coffee over ice for a flavorful cup or travel mug that is never diluted.
    REMOVABLE RESERVOIR: Features a removable 56-oz. water reservoir for easy refilling.
    THERMAL FLAVOR EXTRACTION DUO: Delivers perfect flavor for grounds and pods with even saturation and precise temperature control for ultra-flavorful coffee.`,
    gallery: [
      'https://m.media-amazon.com/images/I/81HbLwnArKL._AC_SL1500_.jpg',
      'https://m.media-amazon.com/images/I/912aQkas1AL._AC_SL1500_.jpg',
      'https://m.media-amazon.com/images/I/81pZC7UxEnL._AC_SL1500_.jpg',
    ],
  },
]

export function GET(): NextResponse {
  return NextResponse.json(data)
}
