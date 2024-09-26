import Link from 'next/link'
import SvgLogo from 'svg/logo.svg'

const links1 = [
  { href: '#', label: 'About' },
  { href: '#', label: 'Contact' },
  { href: '#', label: 'Stockists' },
  { href: '#', label: 'Shipping' },
  { href: '#', label: 'Returns and Exchanges' },
  { href: '#', label: 'Customer Service' },
]

const links2 = [
  { href: '#', label: 'Instagram' },
  { href: '#', label: 'Facebook' },
]

const links3 = [
  { href: '#', label: 'Terms and Conditions' },
  { href: '#', label: 'Privacy Policy' },
  { href: '#', label: 'Accessibility' },
]

function LinksList({ links }: { links: { href: string, label: string }[] }) {
  return (
    <ul>
      {links.map((link, index) => (
        <li key={index}>
          <Link className="inline-block py-1 transition-opacity hover:opacity-50" href={link.href}>{link.label}</Link>
        </li>
      ))}
    </ul>
  )
}

export function ArFooter() {
  return (
    <footer className="text-oslo container px-16 py-[84px]">
      <SvgLogo />

      <div className="mt-16 grid gap-y-6">
        <LinksList links={links1} />
        <LinksList links={links2} />
        <LinksList links={links3} />
      </div>
    </footer>
  )
}
