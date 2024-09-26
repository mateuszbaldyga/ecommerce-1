import Image from 'next/image'
import { cn } from 'utils/cn'
import Link from 'next/link'
import { ROUTES } from 'routes'
import type { ImageType } from 'types'

type Props = {
  images: [ImageType, ImageType] | [ImageType]
  text: [string, string]
}

export function ArImageBlock({ images, text }: Props) {
  return (
    <section className="relative h-lvh">
      <Link href={ROUTES.category('dresses')}>
        <div className="flex h-full">
          {images.map((item, index) => (
            <Image
              src={item.src}
              alt={item.alt}
              width={item.width}
              height={item.height}
              key={index}
              sizes={images.length === 1 ? '100vw' : '50vw'}
              className={cn(
                'object-cover',
                { 'hidden md:block': index !== 0 },
                images.length === 1 ? 'md:w-full' : 'md:w-1/2',
              )}
            />
          ))}
        </div>

        <div className="absolute left-0 top-0 flex size-full items-center text-riga text-white">
          {text.map((item, index) => (
            <span
              key={index}
              className={cn(
                'px-10',
                images.length === 1 ? 'md:w-full' : 'md:w-1/2',
                !index ? 'text-right' : '',
              )}
            >
              {item}
            </span>
          ))}
        </div>
      </Link>
    </section>
  )
}
