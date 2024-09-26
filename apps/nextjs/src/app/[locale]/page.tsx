import type { Metadata } from 'next'
import { ArImageBlock } from 'components/ArImageBlock'
import { ArHero } from 'components/ArHero'
import SvgLogo from 'svg/logo.svg'
import { ArFooter } from 'components/ArFooter'

export const metadata: Metadata = {
  title: 'Ar Home Page',
  description: 'Ar Home Page Description',
}

export default function ArHomePage() {
  return (
    <>
      <div className="relative">
        <ArHero
          image={{
            src: '/images/hero-1.webp',
            alt: '',
            width: 2560,
            height: 1825,
          }}
          text={['Urban Madonna', 'City Style Vision']}
        />

        <div className="container absolute bottom-16 left-0 text-white">
          <SvgLogo />
        </div>
      </div>

      <ArImageBlock
        images={[
          {
            src: '/images/section-4a.webp',
            alt: '',
            width: 1400,
            height: 2089,
          },
          {
            src: '/images/section-4b.webp',
            alt: '',
            width: 1400,
            height: 2089,
          },
        ]}
        text={['Dresses', 'Soirée Of The Season']}
      />
      <ArImageBlock
        images={[
          {
            src: '/images/section-1a.webp',
            alt: '',
            width: 1400,
            height: 2089,
          },
          {
            src: '/images/section-1b.webp',
            alt: '',
            width: 1400,
            height: 2089,
          },
        ]}
        text={['Tops', 'Striking And Subtle']}
      />
      <ArImageBlock
        images={[
          {
            src: '/images/section-2a.webp',
            alt: '',
            width: 1400,
            height: 2089,
          },
          {
            src: '/images/section-2b.webp',
            alt: '',
            width: 1400,
            height: 2089,
          },
        ]}
        text={['Outerwear', 'Fall For Leather']}
      />
      <ArImageBlock
        images={[
          { src: '/images/section-3.webp', alt: '', width: 2560, height: 1716 },
        ]}
        text={['Handbags', 'Carry Your Essence']}
      />
      <ArImageBlock
        images={[
          {
            src: '/images/section-5a.webp',
            alt: '',
            width: 1400,
            height: 2089,
          },
          {
            src: '/images/section-5b.webp',
            alt: '',
            width: 1400,
            height: 2089,
          },
        ]}
        text={['Shoes', 'Roses Underfoot']}
      />

      <ArFooter />
    </>
  )
}
