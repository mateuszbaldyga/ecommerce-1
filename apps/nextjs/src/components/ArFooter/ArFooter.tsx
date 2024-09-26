import Link from 'next/link'
import SvgLogo from 'svg/logo.svg'
import { UiFormTextInput } from '@repo/ui/UiFormTextInput'
import SvgArrow from 'svg/arrow.svg'
import type { LinkType } from 'types'

const links1: LinkType[] = [
  { href: '#', label: 'About' },
  { href: '#', label: 'Contact' },
  { href: '#', label: 'Stockists' },
  { href: '#', label: 'Shipping' },
  { href: '#', label: 'Returns and Exchanges' },
  { href: '#', label: 'Customer Service' },
]

const links2: LinkType[] = [
  { href: '#', label: 'Instagram' },
  { href: '#', label: 'Facebook' },
]

const links3: LinkType[] = [
  { href: '#', label: 'Terms and Conditions' },
  { href: '#', label: 'Privacy Policy' },
  { href: '#', label: 'Accessibility' },
]

function LinksList({
  links,
  className,
}: {
  links: LinkType[]
  className?: string
}) {
  return (
    <ul className={className}>
      {links.map((link, index) => (
        <li key={index}>
          <Link
            className="inline-block py-1 transition-opacity hover:opacity-50"
            href={link.href}
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export function ArFooter() {
  return (
    <footer className="container py-[84px] text-oslo">
      <SvgLogo />

      <div className="mt-16 grid gap-y-6 md:grid-cols-3 md:gap-x-6">
        <LinksList links={links1} />

        <form action="" className="md:order-1">
          <div>Newsletter</div>
          <div className="flex gap-2 py-2 text-black">
            <UiFormTextInput placeholder="Email Address" className="flex-1" />

            <button type="submit">
              <SvgArrow className="w-6 -scale-x-100" />
            </button>
          </div>
        </form>

        <div className="md:order-0 grid grid-cols-2 items-end gap-6 md:grid-cols-1">
          <LinksList links={links2} className="md:order-1" />
          <LinksList links={links3} />
        </div>
      </div>
    </footer>
  )
}
