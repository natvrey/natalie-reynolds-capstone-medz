"use client"

import Link from "next/link"
import Image from "next/image"

export function Header() {
  return (
    <header className="sticky top-0 z-10 w-full bg-gradient-to-r from-violet-200 to-pink-50 shadow-sm">
      <div className="flex items-center justify-center gap-4 px-4 py-3">
        <Link href="/" className="flex items-center gap-3 no-underline">
          <span className="text-2xl font-extrabold tracking-tight text-violet-600 md:text-3xl">
            Medz
          </span>
          <Image
            src="/images/logo.jpg"
            alt="Medz+ logo"
            width={40}
            height={40}
            className="rounded-xl shadow-sm"
          />
        </Link>
      </div>
    </header>
  )
}
