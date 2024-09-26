import React from 'react'
import SvgLogo from 'svg/logo.svg'
import SvgHamburger from 'svg/hamburger.svg'
import Link from 'next/link'
import { ROUTES } from 'routes'

export function ArHeader() {
  const bagCount = 0

  return (
    <header className="z-header text-oslo container fixed left-0 top-0 flex h-[68px] w-full items-center justify-between text-white">
      <div className="-z-1 bg-gradient-header pointer-events-none absolute left-0 top-0 h-[50lvh] w-full" />

      <button type="button" className="md:hidden">
        <SvgHamburger className="w-6" />
      </button>

      <nav className="hidden md:block">
        <ul className="flex items-center gap-4">
          <li>
            <button type="button">Shop</button>
          </li>
          <li>
            <button type="button">Stories</button>
          </li>
          <li>
            <button type="button">Collections</button>
          </li>
          <li>
            <button type="button">Boutique</button>
          </li>
        </ul>
      </nav>

      <Link
        href={ROUTES.home()}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <SvgLogo style={{ width: 'clamp(190px, 20vw, 380px)' }} />
      </Link>

      <nav>
        <ul className="flex items-center gap-4">
          <li>
            <button type="button">Assistance</button>
          </li>
          <li>
            <button type="button" className="flex items-center gap-4">
              <div>Bag</div>
              <div className="bg-ar-black flex size-6 items-center justify-center rounded-full text-white">
                {bagCount}
              </div>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  )
}
