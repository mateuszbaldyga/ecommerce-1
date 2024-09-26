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
                <div className="text-riga2 mb-6 font-serif italic">
                  {heading}
                </div>

                <ul className="grid grid-cols-[repeat(3,220px)] gap-y-2">
                  {links.map((link, index) => (
                    <li key={index}>
                      <Link href={link.href} className="group relative">
                        {link.label}
                        <span className="left-100 absolute ml-2 font-serif italic opacity-0 transition-opacity group-hover:opacity-100">
                          {' '}
                          (View)
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>

                <Link
                  className="text-riga2 relative mt-6 inline-block font-serif italic before:absolute before:-bottom-0 before:left-0 before:h-px before:w-full before:bg-white before:opacity-0 before:transition-opacity hover:before:opacity-100"
                  href={footer.href}
                >
                  {footer.label}
                </Link>
              </div>
            )
          case 'list':
            return (
              <div className="relative flex h-full flex-col items-center pb-16">
                <ul className="text-riga2 flex flex-1 flex-col justify-center gap-y-4 text-center font-serif italic">
                  {links.map((link, index) => (
                    <li key={index}>
                      <Link href={link.href} className="group">
                        {link.label}
                        <span className="left-100 absolute ml-2 font-serif italic opacity-0 transition-opacity group-hover:opacity-100">
                          {' '}
                          (View)
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>

                <Link
                  className="text-riga2 relative mt-6 block font-serif italic before:absolute before:-bottom-0 before:left-0 before:h-px before:w-full before:bg-white before:opacity-0 before:transition-opacity hover:before:opacity-100"
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
