import Link from 'next/link'
import { ROUTES } from 'routes'
import Image from 'next/image'
import { cn } from 'utils/cn'

type ImageType = { src: string, alt: string, width: number, height: number }

type Props = {
  image: ImageType
  text: [string, string]
}

export function ArHero({ image, text }: Props) {
  return (
    <section className="relative h-lvh">
      <Link href={ROUTES.category('dresses')}>
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          sizes="100vw"
          className="h-full object-cover"
        />

        <div className="text-riga absolute left-0 top-0 flex size-full items-center text-white">
          {text.map((item, index) => (
            <span
              key={index}
              className={cn('w-1/2 px-10', !index ? 'text-right' : '')}
            >
              {item}
            </span>
          ))}
        </div>
      </Link>
    </section>
  )
}
