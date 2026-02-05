"use client"

import Link from "next/link"
import Image from "next/image"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-center">
        <Link href="/" className="flex items-center gap-3 transition-opacity hover:opacity-80">
          <Image
            src="/images/logo.jpg"
            alt="Medz+ logo"
            width={36}
            height={36}
            className="rounded-lg"
          />
          <span className="text-xl font-semibold tracking-tight">
            Medz<span className="text-destructive">+</span>
          </span>
        </Link>
      </div>
    </header>
  )
}
