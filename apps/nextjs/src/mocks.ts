import type { MegaMenu } from 'types'

export const navigation: Array<{
  label: string
  id: string
  megaMenu?: MegaMenu
}> = [
  {
    label: 'Shop',
    id: 'shop',
    megaMenu: {
      image: {
        src: '/images/mega-menu-1.webp',
        alt: '',
        width: 2560,
        height: 1638,
      },
      layout: 'columns',
      heading: 'Categories',
      footer: { label: 'All products', href: '#' },
      links: [
        { label: 'New in', href: '#' },
        { label: 'Exclusives', href: '#' },
        { label: 'Dresses', href: '#' },
        { label: 'Handbags', href: '#' },
        { label: 'Handmade', href: '#' },
        { label: 'Tailoring and Suits', href: '#' },
        { label: 'Knitwear', href: '#' },
        { label: 'Coats and Jackets', href: '#' },
        { label: 'Tops', href: '#' },
        { label: 'Bodysuits', href: '#' },
        { label: 'Skirts', href: '#' },
        { label: 'Pants', href: '#' },
        { label: 'Denim', href: '#' },
        { label: 'Leather and Shearling', href: '#' },
        { label: 'Basics', href: '#' },
        { label: 'Shoes', href: '#' },
        { label: 'Eyewear', href: '#' },
        { label: 'Beachwear', href: '#' },
        { label: 'Jewelry', href: '#' },
        { label: 'Accessories', href: '#' },
        { label: 'Essentials', href: '#' },
      ],
    },
  },
  {
    label: 'Stories',
    id: 'stories',
    megaMenu: {
      image: {
        src: '/images/mega-menu-2.webp',
        alt: '',
        width: 2560,
        height: 1638,
      },
      layout: 'list',
      footer: { label: 'View All', href: '#' },
      links: [
        { label: 'Bridal Edit: Begin Your Story', href: '#' },
        { label: 'Koniaków Lace: Web Of Senses', href: '#' },
        { label: 'Apolonia Bag: Declaration Of Grace', href: '#' },
        { label: 'Brigitte Bag: The Goddess Herself', href: '#' },
        { label: 'Sunglasses : Blooming Optic', href: '#' },
        { label: 'Exclusives : Rose Essentials', href: '#' },
        { label: 'Crochet: Slavic Heritage', href: '#' },
      ],
    },
  },
  {
    label: 'Collections',
    id: 'collections',
    megaMenu: {
      image: {
        src: '/images/mega-menu-3.webp',
        alt: '',
        width: 2560,
        height: 1638,
      },
      layout: 'list',
      footer: { label: 'View All', href: '#' },
      links: [
        { label: 'Pre-Spring 2025 lookbook', href: '#' },
        { label: 'Fall Winter 2024 lookbook', href: '#' },
        { label: 'Pre-Fall 2024 lookbook', href: '#' },
      ],
    },
  },
  {
    label: 'Boutique',
    id: 'boutique',
  },
]
