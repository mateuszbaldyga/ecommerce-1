import type { MegaMenu } from 'types'
import Image from 'next/image'
import Link from 'next/link'

export type Props = MegaMenu

export function ArMegaMenu({ image, heading, footer, links, layout }: Props) {
  return (
    <div className="absolute left-0 top-0 flex h-[90lvh] w-full items-center justify-center">
      <Image
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        className="absolute left-0 top-0 size-full object-cover"
      />

      {(() => {
        switch (layout) {
          case 'columns':
            return (
              <div className="relative">
                <div className="mb-6 font-serif text-riga2 italic">
                  {heading}
                </div>

                <ul className="grid grid-cols-[repeat(3,220px)] gap-y-2">
                  {links.map((link, index) => (
                    <li key={index}>
                      <Link
                        href={link.href}
                        className="transition-opacity hover:opacity-50"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>

                <Link
                  className="mt-6 block font-serif text-riga2 italic"
                  href={footer.href}
                >
                  {footer.label}
                </Link>
              </div>
            )
          case 'list':
            return (
              <div className="relative flex h-full flex-col items-center pb-16">
                <ul className="flex flex-1 flex-col justify-center gap-y-4 text-center font-serif text-riga2 italic">
                  {links.map((link, index) => (
                    <li key={index}>
                      <Link
                        href={link.href}
                        className="transition-opacity hover:opacity-50"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>

                <Link
                  className="mt-6 block font-serif text-riga2 italic"
                  href={footer.href}
                >
                  {footer.label}
                </Link>
              </div>
            )
          default:
            return null
        }
      })()}
      <ul></ul>
    </div>
  )
}
